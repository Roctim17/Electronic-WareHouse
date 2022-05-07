import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/product`;
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
        <div>
            <h1>Add Product</h1>
            <form className='d-flex flex-column w-50 m-auto p-5' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-1' placeholder='name' {...register("name", { required: true })} />
                <textarea className='mb-1' placeholder='description' {...register("description")} />
                <input className='mb-1' placeholder='supplier' {...register("supplier")} />
                <input className='mb-1' placeholder='price' type="number" {...register("price")} />
                <input className='mb-1' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='mb-1' placeholder='image Url' {...register("image")} />
                <input type="submit" value='Update' />
            </form>
        </div>
    );
};

export default AddProduct;