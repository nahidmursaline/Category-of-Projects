import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UseCategory from '../Hooks/UseCategory';
import Category from './Category';
import CategoryDataCard from './CategoryDataCard';

const CategoryData = () => {
    const { categoryName } = useParams();
    const [data] = UseCategory(categoryName);

    useEffect(() => {
        
    }, [categoryName]);

    return (
     <div>
        <section>
            <Category></Category>
        </section>
           <div className='grid md:grid-cols-3 gap-5'>
            {data && data.length > 0 ? (
                data.map(product => (
                    <CategoryDataCard
                        key={product._id}
                        product={product}
                    />
                ))
            ) : (
                <p>No data available for this category.</p>
            )}
        </div>
     </div>
    );
};

export default CategoryData;
