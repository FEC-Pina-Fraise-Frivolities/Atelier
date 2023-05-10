import React, { useEffect, useState } from 'react';

function Price({ selectedStyle }) {
  const [salePrice, setSalePrice] = useState('');
  const [listPrice, setListPrice] = useState('');
  const [listPriceStyle, setListPriceStyle] = useState({});

  useEffect(() => {
    setListPrice(selectedStyle.original_price);
    if (typeof selectedStyle.sale_price !== 'string') {
      setSalePrice('');
      setListPriceStyle({});
    } else {
      setSalePrice(`ON SALE $${selectedStyle.sale_price}`);
      setListPriceStyle({ textDecoration: 'line-through' });
    }
  }, [selectedStyle]);

  return (
    <div className="price">
      <div className="listPrice" style={listPriceStyle}>
        {' $'}
        {listPrice}
      </div>
      <div className="salePrice">
        {salePrice}
      </div>

    </div>

  );
}

export default Price;
