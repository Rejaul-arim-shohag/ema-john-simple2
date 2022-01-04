import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product)=>total+product.price, 0)
    let shipping = 0;
    if(total>35){
        shipping = 0;
    } else if(total>15){
        shipping = 4.99
    } else if(total>0){
        shipping = 12.99
    } 
    const tax = total/10;
    const grundTotal = total+shipping+tax;
    const formatNumber = num =>{
        const precision = (num).toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <h2>Total product aded {cart.length}</h2>
            <h4> Price : {formatNumber(total)}</h4>
            <h4>Shipping Cost {formatNumber(shipping)}</h4>
            <h4>Tax+Vat {formatNumber(tax)}</h4>
            <h4>Grand Total{formatNumber(grundTotal)}</h4>
        </div>
    );
};

export default Cart;