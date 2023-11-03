import React from 'react';

const CategoryDataCard = ({product}) => {
    const {image, title, description} = product;
    return (
        <div>
                 <div className="card w-full glass h-[500px]">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm btn-error">VIEW DETAILS!</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoryDataCard;