import React, { useEffect, useState } from 'react';
import {
  AddToCart, Basics, Description, GalleryView, Price, QuantitySelector, SizeSelector, StyleSelector,
} from './index';

function Overview({ productId }) {
  const [productData, setProductData] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedSize, setSelectedSize] = useState('');
  const [skusNull, setSkusNull] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
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
      />
      <Description productData={productData} />
      <Price selectedStyle={selectedStyle} />
      <div className="productDetails">
        <StyleSelector
          productStyles={productStyles}
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          setSelectedPhoto={setSelectedPhoto}
        />
        <SizeSelector
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
          selectedQuantity={selectedQuantity}
          setSelectedQuantity={setSelectedQuantity}
        />
        <AddToCart
          productData={productData}
          selectedStyle={selectedStyle}
          selectedSize={selectedSize}
          selectedQuantity={selectedQuantity}
          skusNull={skusNull}
        />
      </div>

      <GalleryView
        selectedStyle={selectedStyle}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </div>
  );
}

export default Overview;
