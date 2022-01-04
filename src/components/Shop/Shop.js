import React, { useState } from 'react';
import fakeData from '../../fakeData/index'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);

    
    const handleAddProduct = (product)=>{
        // console.log("product added", product)
        const newCart = [...cart,product];
        setCart(newCart)
    }
    return (
        <div className="shop_container">
            <div className="product_container">
                <ul>
                    {
                        products.map(product => <Product 
                            product={product} 
                            handleAddProduct={handleAddProduct}
                        ></Product>)
                    }
                </ul>
            </div>
            <div className="cart_container">
                <Cart cart={cart}></Cart>
            </div> 


        </div>
    );
};

export default Shop;