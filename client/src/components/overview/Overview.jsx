import React, { useEffect, useState } from 'react';
import ProductData from './components/ProductData';
import ProductStyles from './components/ProductStyles';

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
  const [productEntries, setProductEntries] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});

  useEffect(() => {
    const productEndpoint = `http://localhost:3000/products/${productId}`;
    fetch(productEndpoint)
      .then((res) => res.json())
      .then((result) => {
        setProductData(result);
        setProductEntries(Object.entries(result));
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
      <ProductData productData={productData} selectedStyle={selectedStyle} />
      <ProductStyles productStyles={productStyles} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
    </div>
  );
}

export default Overview;
