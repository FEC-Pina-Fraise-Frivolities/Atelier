import React, { useEffect, useState } from 'react';

function ProductData({ productData, selectedStyle }) {
  const [salePrice, setSalePrice] = useState('');
  const [listPrice, setListPrice] = useState('');
  const [listPriceStyle, setListPriceStyle] = useState({});

  useEffect(() => {
    setListPrice(productData.default_price);
    if (typeof selectedStyle.sale_price !== 'string') {
      setSalePrice('');
      setListPriceStyle({});
    } else {
      setSalePrice(`ON SALE $${selectedStyle.sale_price}`);
      setListPriceStyle({ textDecoration: 'line-through' });
    }
  }, [selectedStyle]);

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
      <div className="productPrice" style={listPriceStyle}>
        {' $'}
        {listPrice}
      </div>
      <div className="salePrice">
        {salePrice}
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
