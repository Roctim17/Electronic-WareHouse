import React from 'react';
import useProduct from '../../Hooks/useProduct';
import '../Product/Product.css'
import DisplaySingleProduct from '../DisplaySingleProduct/DisplaySingleProduct';

const DisplayProduct = () => {
    const [products] = useProduct([]);
    return (
        <div>
            <div className='product-container p-5'>
                <h1> Product</h1>
                <div className="product">
                    {
                        products.map(product => <DisplaySingleProduct
                            key={product._id}
                            product={product}
                        >
                        </DisplaySingleProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DisplayProduct;