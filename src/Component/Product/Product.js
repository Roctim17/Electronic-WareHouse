import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className="container">
                {
                    products.map(product => <SingleProduct
                        key={products._id}
                        products={products}
                    >
                    </SingleProduct>)
                }

            </div>

        </div>
    );
};

export default Product;