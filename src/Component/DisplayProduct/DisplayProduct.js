import React from 'react';
import useProduct from '../../Hooks/useProduct';
import '../Product/Product.css'
import DisplaySingleProduct from '../DisplaySingleProduct/DisplaySingleProduct';

const DisplayProduct = () => {
    const [products] = useProduct([]);
    return (
        <div>
            <div className='product-container pt-3'>
                <h1> Product</h1>
                <div className="product">
                    {
                        products.slice(0, 6).map(product => <DisplaySingleProduct
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