import React from 'react';
import Price from './Price';

function Basics({ productData, selectedStyle }) {
  return (
    <div className="basics">
      <div className="productCategory">
        {' '}
        {productData.category}
      </div>
      <div className="productName">
        {' '}
        {productData.name}
      </div>
      <Price selectedStyle={selectedStyle} />
    </div>
  );
}

export default Basics;
