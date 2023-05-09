import React, { useEffect, useState } from 'react';
import ProductData from './components/ProductData';
import ProductSizes from './components/ProductSizes';
import ProductStyles from './components/ProductStyles';
import QuantitySelector from './components/QuantitySelector';

// AR = 1*a+2*b+3*c+4*d+5*e/(R)
// Average rating formula where
// a = # of 1 star ratings
// b = # of 2 star ratings
// c = # of 3 star ratings
// d = # of 4 star ratings
// e = # of 5 star ratings
// and R = total number of ratings

function Overview({ productId, setProductId }) {
  const [productData, setProductData] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedSize, setSelectedSize] = useState('');
  const [skusNull, setSkusNull] = useState(false);

  useEffect(() => {
    const productEndpoint = `http://localhost:3000/products/${productId}`;
    fetch(productEndpoint)
      .then((res) => res.json())
      .then((result) => {
        setProductData(result);
      })
      .catch((err) => {
        console.log('get product data failed', err);
      });

    fetch(`${productEndpoint}/styles`)
      .then((res) => res.json())
      .then((result) => {
        setProductStyles(result.results);
        setSelectedStyle(result.results[0]);
      })
      .catch((err) => {
        console.log('get product data failed', err);
      });
  }, []);

  return (
    <div className="productData">
      <div />
      <ProductData
        productData={productData}
        selectedStyle={selectedStyle}
      />
      <ProductStyles
        productStyles={productStyles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
      />
      <ProductSizes
        selectedStyle={selectedStyle}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        skusNull={skusNull}
        setSkusNull={setSkusNull}
      />
      <QuantitySelector
        selectedStyle={selectedStyle}
        selectedSize={selectedSize}
        skusNull={skusNull}
        setSkusNull={setSkusNull}
      />
    </div>
  );
}

export default Overview;
