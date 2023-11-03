import React from 'react';
import AllProducts from '../../../Components/AllProducts/AllProducts';
import Category from '../../../Components/Category/Category';

const Home = () => {
    return (
        <div>
            <Category></Category>
           <AllProducts></AllProducts>
        </div>
    );
};

export default Home;