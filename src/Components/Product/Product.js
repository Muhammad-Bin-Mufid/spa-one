import React from 'react';
import './Product.css';
import Link from "react-router-dom/es/Link";

const Product = (props) => {
    console.log(props);
    let {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="productSector">
            <div className="imageArea">
                <img src={img} alt="This product is for sale"/>
            </div>
            <div className="infoArea">
                <h3 className="productName"><Link to={"/products/"+key}><li>{name}</li></Link></h3>
                <h5>Sold By: {seller}</h5>
                <h5>$: {price}</h5>
                <h5>Only {stock} in stock. Order Soon..</h5>
                {
                    props.showAddToCart && <button onClick={() => props.buttonHandler(props.product)}>Add To cart</button>
                }
            </div>
        </div>
    );
};

export default Product;