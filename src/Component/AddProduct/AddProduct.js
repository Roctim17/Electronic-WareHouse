import React from 'react';
import './AddProduct.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase.init';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const [user] = useAuthState(auth)
    if (user) {
        console.log(user);
    }

    const handleMyProduct = event => {
        event.preventDefault();
        const myProduct = {
            email: user.email,
            supplierName: user.displayName,
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            description: event.target.description.value,
            price: event.target.price.value,
            supplier: event.target.supplier.value,
            image: event.target.image.value
        }
        axios.post('https://limitless-coast-93493.herokuapp.com/product', myProduct)
            .then(response => {
                const { data } = response;
                console.log(response)
                if (data.insertedId) {
                    toast('Your Product is add');
                    event.target.reset();
                }
            })
    }
    return (
        <div>
            <div className='add-product p-3'>
                <h1>Add Your Product </h1>
                <div className="add-product-container m-auto"></div>
                <form className='d-flex flex-column m-auto p-5 w-75' onSubmit={handleMyProduct}>
                    <input className='mb-3 input' placeholder='name' name='' value={user?.displayName} required readOnly />
                    <input className='mb-3 input' placeholder='name' name='' value={user?.email} required readOnly />
                    <input className='mb-3 input' placeholder='name' name='name' />
                    <textarea className='mb-3 input' placeholder='description' name='description' />
                    <input className='mb-3 input' placeholder='quantity' type="number" name='quantity' />
                    <input className='mb-3 input' placeholder='price' type="number" name='price' />
                    <input className='mb-3 input' placeholder='supplier' name='supplier' />
                    <input className='mb-3 input' placeholder='image Url' name='image' />
                    <input className='btn btn-success input' type="submit" value='Update' />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;