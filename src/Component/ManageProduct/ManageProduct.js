import React from 'react';
import useProduct from '../../Hooks/useProduct';

const ManageProduct = () => {
    const [products, setProducts] = useProduct([]);

    const handleDelete = id => {
        const proceed = window.confirm('Sure ! Are you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
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
        <div>
            <h1>Manage Product</h1>
            <div className="">
                {
                    products.map(product => <div key={product._id}>
                        <h3>{product.name} <button onClick={() => handleDelete(product._id)}>Delete</button></h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;