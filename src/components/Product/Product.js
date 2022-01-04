import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const { name, img, price, seller, stock } = props.product
    return (
        <div class="product">
            <div className="propduct_img">
                <img src={img} alt="" />
            </div>

            <div className="productDescription">
                <h2 className="product_name"> {name}</h2>
                <h3>${price}</h3>
                <br />
                <span>seller:{seller}</span>
                <br />
                <span>stock {stock}</span>
                <br/>
                <button onClick={()=>props.handleAddProduct(props.product)}  class="main_btn"><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;