import React from 'react';

function Basics({ productData }) {
  return (
    <div className="basics">
      <div className="productName">
        {' '}
        {productData.name}
      </div>
      <div className="productCategory">
        {' '}
        {productData.category}
      </div>

    </div>
  );
}

export default Basics;
