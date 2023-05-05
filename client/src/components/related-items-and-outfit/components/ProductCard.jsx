import { React, useState } from 'react';

const ProductCard = (props)=>{
  const handleClick = () => {
    props.setProductId(props.id);
  };

  return (
    <div>
      <div onClick={handleClick}>{props.id}</div>
    </div>
  );
};

export default ProductCard;
