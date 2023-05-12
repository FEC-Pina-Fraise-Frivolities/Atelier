import React, { useEffect, useState } from 'react';
import placeholderImage from '../../assets/index';
import {
  Basics, Description, GalleryView, ProductDetails,
} from './index';

function Overview({ productId }) {
  const [productData, setProductData] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedThumb, setSelectedThumb] = useState('');
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
        setSelectedThumb(result.results[0].photos[0].thumbnail_url || placeholderImage);
        setSelectedPhoto(result.results[0].photos[0].url || placeholderImage);
      })
      .catch((err) => {
        console.log('get product data failed', err);
      });
  }, [productId]);

  return (
    <div className="productData">
      <Basics
        productData={productData}
        selectedStyle={selectedStyle}
      />
      <Description productData={productData} />
      <ProductDetails
        productData={productData}
        productStyles={productStyles}
        selectedStyle={selectedStyle}
        selectedPhoto={selectedPhoto}
        setSelectedStyle={setSelectedStyle}
        setSelectedPhoto={setSelectedPhoto}
        setSelectedThumb={setSelectedThumb}
      />
      <GalleryView
        selectedStyle={selectedStyle}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        selectedThumb={selectedThumb}
        setSelectedThumb={setSelectedThumb}
      />
    </div>
  );
}

export default Overview;
