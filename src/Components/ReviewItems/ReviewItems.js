import React from 'react';

const ReviewItems = (props) => {
    const {name, quantity} = props.product;
    return (
        <div>
            <p><b>{name}</b></p>
            <p>{quantity}</p>
        </div>
    );
};

export default ReviewItems;