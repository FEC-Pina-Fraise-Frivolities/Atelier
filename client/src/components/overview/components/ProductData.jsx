import React, { useEffect, useState } from 'react';

function ProductData({ productData }) {
  return (
    <div className="productData">
      <div className="productName">
        {' '}
        {productData.name}
      </div>
      <div className="productDescription">
        {' '}
        {productData.description}
      </div>
      <div className="productCategory">
        {' '}
        {productData.category}
      </div>
      <div className="productPrice">
        {' $'}
        {productData.default_price}
      </div>

      {/* {productEntries.map((entry) => (
        <div className="entry" key={entry}>
          {' '}
          {`${entry[0]}: ${entry[1]}`}
          {' '}
        </div>
      ))} */}
    </div>

  );
}

export default ProductData;
