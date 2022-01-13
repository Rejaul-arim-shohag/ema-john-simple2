import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const {name, quantity, price} = props.pd
    return (
        <div >
            <h4>{name}</h4>
            <h5>quantity: {quantity}</h5>
            <h5>price: {price}</h5>
            <button className="main_btn">Review item</button>
        </div>
    );
};

export default ReviewItem;