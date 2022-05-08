import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {
    const { _id, image, name, price, description, quantity, supplier } = product;
    const navigate = useNavigate();

    const navigateToProductUpdate = id => {
        console.log(id)
        navigate(`/product/${id}`)
    }
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
                            <button onClick={() => navigateToProductUpdate(_id)} className='btn btn-warning'>Update </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;