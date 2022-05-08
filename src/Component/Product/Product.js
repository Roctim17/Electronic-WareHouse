import React from 'react';
import useProduct from '../../Hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Product.css'

const Product = () => {
    const [products] = useProduct([]);

    return (
        <div className='product-container p-5'>
            <h1> Product</h1>
            <div className="product">
                {
                    products.slice(0, 6).map(product => <SingleProduct
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