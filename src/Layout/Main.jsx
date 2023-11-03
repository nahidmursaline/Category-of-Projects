import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../Components/Category/Category';

const Main = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;