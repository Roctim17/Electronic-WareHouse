import React from 'react';
import './ManageProduct.css'
import useProduct from '../../Hooks/useProduct';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [products, setProducts] = useProduct([]);

    const handleDelete = id => {
        const proceed = window.confirm('Sure ! Are you want to delete?')
        if (proceed) {
            const url = `https://limitless-coast-93493.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);

                })
        }
    }
    return (
        <div className='row text-center mx-auto'>
            <h1>Manage Product</h1>

            <Link className="nav-link" to="/AddNewProduct"><button className='btn btn-success'>Add New Product</button> </Link>


            <div className="col-md-12 col-sm-12 m-auto">
                {
                    products.map(product => <div key={product._id}>
                        <div className="manage-product w-50 m-auto p-3">
                            <img src={product.image} alt="" />
                            <h5>{product.name} </h5>
                            <h6>Price: {product.price}</h6>
                            <h6>Supplier: {product.supplier}</h6>
                            <h6>Quantity: {product.quantity}</h6>
                            <button className='btn btn-danger' onClick={() => handleDelete(product._id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>


                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;