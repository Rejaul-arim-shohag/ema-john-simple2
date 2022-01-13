import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import {getStoredCart} from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        //load external data
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key=>{
            const product = fakeData.find(pd=>pd.key===key);
            product.quantity = savedCart[key]
            return product;
        })
        setCart(cartProducts)
    },[])
    return (
        <div style={{width: "1200px", margin: "auto"}}>
           {
               cart.map((pd)=><ReviewItem pd={pd}></ReviewItem>)
           }
        </div>
    );
};

export default Review;