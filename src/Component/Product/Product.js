import React from 'react';
import useProduct from '../../Hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Product.css'

const Product = () => {
    const [products] = useProduct([]);

    return (
        <div className='product-container'>
            <h1> Product</h1>
            <div className="product">
                {
                    products.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    >
                    </SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Product;