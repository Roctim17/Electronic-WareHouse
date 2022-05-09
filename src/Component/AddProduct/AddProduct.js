import React from 'react';
import './AddProduct.css'
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://limitless-coast-93493.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };
    return (
        <div className='add-product p-3'>
            <h1 className='p-3'>Add Product</h1>
            <div className="add-product-container m-auto">
                <form className='d-flex flex-column m-auto p-5' onSubmit={handleSubmit(onSubmit)}>

                    <input className='mb-3 input' placeholder='name' {...register("name", { required: true })} />
                    <textarea className='mb-3 input' placeholder='description' {...register("description")} />
                    <input className='mb-3 input' placeholder='quantity' type="number" {...register("quantity")} />
                    <input className='mb-3 input' placeholder='price' type="number" {...register("price")} />
                    <input className='mb-3 input' placeholder='supplier' {...register("supplier")} />
                    <input className='mb-3 input' placeholder='image Url' {...register("image")} />
                    <input className='btn btn-success input' type="submit" value='Update' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;