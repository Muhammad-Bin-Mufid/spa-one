import React from 'react';
import Link from "react-router-dom/es/Link";
import Review from "../Review/Review";

const Cart = (props) => {
    let cartValue = 0;
    for (let i = 0; i < props.cart.length; i++) {
        cartValue = props.cart[i].price + cartValue;
    }
    return (
        <div>
            <p>Carted Products: {props.cart.length}</p>
            <p>Value of Cart: {cartValue}</p>
            <Link to="/review"><button>Review Your Cart</button></Link>
        </div>
    );
};

export default Cart;