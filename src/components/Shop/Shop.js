import React, { useState } from 'react';
import fakeData from '../../fakeData/index'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb} from '../../utilities/fakedb'
import './Shop.css'
const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product)=>{
        // console.log("product added", product)
        const newCart = [...cart,product];
        setCart(newCart)
        const sameProduct = newCart.filter(pd=>pd.key===product.key);
        const count = sameProduct.length
        addToDb(product.key, count)
    }
    return (
        <div className="shop_container">
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
                <Cart cart={cart}></Cart>
            </div> 


        </div>
    );
};

export default Shop;