import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue="test" {...register("example")} />
                <input {...register("exampleRequired", { required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;