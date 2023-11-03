import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setAllProducts(data);
            setLoading(false);
        })
    },[])
    return [allProducts, loading]
};

export default useAllProducts;