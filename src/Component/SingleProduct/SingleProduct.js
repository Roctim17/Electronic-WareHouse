import React from 'react';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {
    const { image, name, price, description, quantity, supplier } = product;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="single-product">
                        <img src={image} alt="" />
                        <div className="">
                            <h3>{name}</h3>
                            <h5>{supplier}</h5>
                            <p>{description.slice(0, 150)} ...</p>
                            <h6>{price} $ </h6>
                            <h5>{quantity}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;