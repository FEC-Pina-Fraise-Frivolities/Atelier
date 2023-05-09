import React, { useEffect, useState } from 'react';

function ProductSizes({ selectedStyle }) {
  const [productSize, setProductSize] = useState('');
  const [productAllSizes, setProductAllSizes] = useState([]);

  let sizeArr = [];

  useEffect(() => {
    if (Object.keys(selectedStyle).length > 0) {
      console.log('stuff in here');
      const skus = Object.entries(selectedStyle.skus);
      console.log('skus: ', skus);
      for (let i = 0; i < skus.length; i += 1) {
        sizeArr = [...sizeArr, skus[i][1].size];
        setProductAllSizes(sizeArr);
        // console.log('productAllSizes: ', productAllSizes);
        console.log('current size: ', skus[i][1].size, 'sizeArr: ', sizeArr);
      }
    }
    console.log(selectedStyle);
  }, [selectedStyle]);

  return (
    <div className="productSizes">
      <label htmlFor={productSize}>
        Select a size:
        {' '}
        <select
          value={productSize}
          onChange={(e) => setProductSize(e.target.value)}
        >
          {productAllSizes.map((size) => <option value={size} key={size}>{size}</option>)}
          {/* <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option> */}
        </select>
      </label>
    </div>

  );
}

export default ProductSizes;
