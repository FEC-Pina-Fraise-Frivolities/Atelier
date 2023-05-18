import React, { useEffect, useState } from 'react';
import placeholderImage from '../../assets/index';
import {
  Basics, Description,
  Features,
  GalleryView, ProductDetails,
} from './index';

function Overview({ productId }) {
  const [productData, setProductData] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedThumb, setSelectedThumb] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const productEndpoint = `products/${productId}`;
    fetch(productEndpoint)
      .then((res) => res.json())
      .then((result) => {
        setProductData(result);
        setFeatures(result.features);
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
    <div id="productOverview">
      <div id="gallery-bar">
        <GalleryView
          selectedStyle={selectedStyle}
          selectedPhoto={selectedPhoto}
          setSelectedPhoto={setSelectedPhoto}
          selectedThumb={selectedThumb}
          setSelectedThumb={setSelectedThumb}
        />
        <Description productData={productData} selectedStyle={selectedStyle} />
      </div>
      <div id="side-bar">
        <Basics
          productData={productData}
          selectedStyle={selectedStyle}
        />
        <ProductDetails
          productData={productData}
          productStyles={productStyles}
          selectedStyle={selectedStyle}
          selectedPhoto={selectedPhoto}
          setSelectedStyle={setSelectedStyle}
          setSelectedPhoto={setSelectedPhoto}
          setSelectedThumb={setSelectedThumb}
        />
        <Features features={features} />
      </div>
    </div>
  );
}

export default Overview;
