import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import './ProductUpdate.css';

const ProductUpdate = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        console.log(url, 'this')
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div>
            <div className="row p-3">
                <h3 className='p-3'>Product details</h3>
                <div className="col-md-4"></div>
                <div className="col-md-4 col-sm-12 product-update">

                    <img src={product.image} alt="" />
                    <h3>Product Name:  {product.name}</h3>
                    <h5>Price :{product.price}</h5>
                    <h5>Quantity :{product.quantity}</h5>
                    <p>{product.description}</p>
                    <h6>Supplier Name: {product.supplier}</h6>
                    <button className='btn btn-info'>Delivered</button>
                </div>
                <div className="col-md-4"></div>
            </div>
            <AddProduct></AddProduct>
        </div>
    );
};

export default ProductUpdate;