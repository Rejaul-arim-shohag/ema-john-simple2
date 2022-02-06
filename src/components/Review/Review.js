import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getStoredCart, deleteFromDb, clearTheCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const handlePlaceOrder=()=>{
        console.log("place orderderd button click")
        setCart([]);
        clearTheCart();
        setOrderPlaced(true)
    }
    const removeItem = (productKey) => {
        const newCart = cart.filter(pd => pd.key === !productKey)
        setCart(newCart)
        deleteFromDb(productKey)
    }
    useEffect(() => {
        //load external data
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts)
    }, []);
    const showImage = <img src={happyImage} alt="" srcset="" />
    return (
        <div style={{ display: "flex"}}>
            <div style={{width: "60%", marginLeft: "50px"}} className="product_container">
                {
                    cart.map((pd) => <ReviewItem pd={pd} removeItem={removeItem}></ReviewItem>)
                }
                {
                    orderPlaced&&showImage
                }

            </div>
            <div className="cart_container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main_btn">place order</button>
                </Cart>
            </div>

        </div>
    );
};

export default Review;