import React, { useEffect, useState } from 'react';

function ProductSizes({ selectedStyle, selectedSize, setSelectedSize }) {
  const [productAllSizes, setProductAllSizes] = useState([]);

  useEffect(() => {
    if (Object.keys(selectedStyle).length > 0) {
      const skus = Object.entries(selectedStyle.skus);
      for (let i = 0; i < skus.length; i += 1) {
        setProductAllSizes((currentSizes) => [...currentSizes, skus[i][1].size]);
      }
    }
    console.log('selectedStyle: ', selectedStyle);
  }, [selectedStyle]);

  return (
    <div className="productSizes">
      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        <option value="value" selected>Please select a size</option>
        {productAllSizes.map((size) => <option value={size} key={size}>{size}</option>)}
      </select>
    </div>

  );
}

export default ProductSizes;
