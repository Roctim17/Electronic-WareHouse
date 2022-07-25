import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase.init';
import './MyProduct.css'
// import { Link } from 'react-router-dom';

const MyProduct = () => {
    const [user] = useAuthState(auth)
    const [myProduct, setMyProduct] = useState([]);
    useEffect(() => {


        const getProduct = async () => {
            const email = user?.email;
            console.log(email);
            if (email) {
                const url = `https://secure-garden-04436.herokuapp.com/myProduct?email=${email}`;
                const { data } = await axios.get(url);
                setMyProduct(data)
            }
        }
        getProduct();

    }, [user])
    const handleDelete = id => {
        const proceed = window.confirm('Sure ! Are you want to delete?')
        if (proceed) {
            const url = `https://secure-garden-04436.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myProduct.filter(product => product._id !== id)
                    setMyProduct(remaining);

                })
        }
    }
    return (
        <div>
            {/* <button className='btn btn-info m-3'><Link className="nav-link" to="/addMyProduct"> Add My Product</Link></button> */}
            <h1> my Product Quantity: {myProduct.length}</h1>
            <div className="col-md-12 col-sm-12 m-auto ">
                {
                    myProduct.map(product => <div key={product._id}>
                        <div className="my-product w-50 m-auto p-3">
                            <img src={product.image} alt="" />
                            <h5>{product.name} </h5>
                            <h6>Price: {product.price}</h6>
                            <h6>Supplier: {product.supplier}</h6>
                            <h6>Quantity: {product.quantity}</h6>
                            <button className='btn btn-danger' onClick={() => handleDelete(product._id)} ><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProduct;