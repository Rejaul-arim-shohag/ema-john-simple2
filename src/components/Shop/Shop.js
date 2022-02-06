import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/index'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'
const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        const productKeys = Object.keys(savedCart)
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey)
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart)
    }, [])

    const handleAddProduct = (product) => {
        const tobeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === tobeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== tobeAddedKey)
            newCart = [...others, sameProduct]
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        // const count = sameProduct.length
        //  newCart = [...cart,product];
        setCart(newCart)

        addToDb(product.key, count)
    }
    return (
        <div className="twin_container">
            <div className="product_container">
                <ul>
                    {
                        products.map(product => <Product
                            showAddToCart={true}
                            key={product.key}
                            product={product}
                            handleAddProduct={handleAddProduct}
                        ></Product>)
                    }
                </ul>
            </div>
            <div className="cart_container">
                <Cart cart={cart}>
                    <Link to="/review"><button className="main_btn">Review order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;