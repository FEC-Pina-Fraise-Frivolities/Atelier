import React, { useEffect, useState } from 'react';
import {
  Basics, Description, GalleryView, ProductDetails,
} from './index';

function Overview({ productId }) {
  const [productData, setProductData] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});

  const [selectedPhoto, setSelectedPhoto] = useState('');

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
        setSelectedPhoto(result.results[0].photos[0].url);
      })
      .catch((err) => {
        console.log('get product data failed', err);
      });
  }, []);

  return (
    <div className="productData">
      <div />
      <Basics
        productData={productData}
        selectedStyle={selectedStyle}
      />
      <Description productData={productData} />
      <ProductDetails
        productData={productData}
        productStyles={productStyles}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        setSelectedPhoto={setSelectedPhoto}
      />
      <GalleryView
        selectedStyle={selectedStyle}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
}

export default Overview;
