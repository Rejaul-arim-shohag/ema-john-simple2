import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, price, seller, stock, key } = props.product
    return (
        <div className="product">
            <div className="propduct_img">
                <img src={img} alt="" />
            </div>

            <div className="productDescription">
                <h2 className="product_name">
                    <Link to={"/product/" + key}>{name}</Link>
                </h2>
                <h3>${price}</h3>
                <br />
                <span>seller:{seller}</span>
                <br />
                <span>stock {stock}</span>
                <br />
                {props.showAddToCart&&<button
                    onClick={() => props.handleAddProduct(props.product)} className="main_btn">
                    <FontAwesomeIcon icon={faShoppingCart} />Add To Cart
                </button>}
            </div>
        </div>
    );
};

export default Product;