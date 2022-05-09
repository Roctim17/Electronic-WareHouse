import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import './ProductUpdate.css';

const ProductUpdate = () => {
    // const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        console.log(url, 'this')
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    //  add quantity
    const handleAddQuantity = e => {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        const updateQuantity = { quantity };
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json)
            .then(data => {
                console.log('success', data)
                e.target.reset();
            })
    }
    //  Delivered
    const handleDelivered = (e) => {
        e.preventDefault();
        const quantity = product.quantity - 1;
        const updateQuantity = { quantity };
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json)
            .then(data => {
                console.log('success', data)
                e.target.reset();
            })
    }

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
                    <button onClick={handleDelivered} className='btn btn-info mb-3'>Delivered</button>
                    <form onSubmit={handleAddQuantity}>

                        <div className=" pb-3">
                            <input className='mb-3' placeholder='quantity' type="number" name="quantity" />
                        </div>
                        <div className="">
                            <input className='btn btn-success' type="submit" value="Add Quantity" />
                        </div>
                    </form>

                    <div className=" p-3">
                        <Link className="nav-link" to="/manage"><button className='btn btn-success'>Manage All Product</button></Link>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>

        </div>
    );
};

export default ProductUpdate;