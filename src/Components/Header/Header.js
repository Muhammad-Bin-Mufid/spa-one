import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import Shop from "../Shop/Shop";

const Header = () => {
    return (
        <div>
            <section className="HeaderSection">
               <section className="HeaderImageSection">
                   <img src={logo} alt="This is about logo"/>
               </section>
                <section className="HeaderNav">
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                </section>
            </section>
        </div>
    );
};

export default Header;