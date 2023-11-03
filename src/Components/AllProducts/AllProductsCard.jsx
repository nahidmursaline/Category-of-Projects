import React from 'react';

const AllProductsCard = ({product}) => {
    const {title, image, description} = product;
    return (
        <div>
            <div className="card w-full glass ">
  <figure><img className="h-[230px] w-full group-hover:scale-110"  src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description?.slice(0,160)}...</p>
    <div className="card-actions justify-end">
      <button className="btn btn-sm btn-error  ">VIEW DETAILS!</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllProductsCard;