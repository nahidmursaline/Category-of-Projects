import React from 'react';
import useAllProducts from '../Hooks/useAllProducts';
import AllProductsCard from './AllProductsCard';

const AllProducts = () => {
    const [allProducts] = useAllProducts()
    return (
        <div>
           <div className='grid md:grid-cols-3 gap-5'>
           {
                allProducts.map(product => <AllProductsCard
                key={product._id}
                product = {product}
                ></AllProductsCard>)
            }
           </div>
        </div>
    );
};

export default AllProducts;