import React from 'react';

function Description({ productData }) {
  return (
    <div className="productDescription">
      {' '}
      {productData.description}
    </div>
  );
}

export default Description;
