import { renderHook } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';
import { productStyles } from './mock-data';

const { result } = renderHook(() => {
  const [selectedStyle, setSelectedStyle] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const [selectedThumb, setSelectedThumb] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [skusNull, setSkusNull] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [productSkus, setProductSkus] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);
  const [allQuantities, setAllQuantites] = useState([]);
  const skuRef = useRef(0);

  const skus = Object.entries(productStyles[0].skus);

  useEffect(() => {
    setSelectedStyle(productStyles[0]);
    setSelectedPhoto(productStyles[0].photos[0].url);
    setSelectedThumb(productStyles[0].photos[0].thumbnail_url);
    setSelectedSize(skus[0][1].size);
    setSelectedQuantity(1);
    setProductSkus(skus);
    setSkusNull(false);
    setProductQuantity(skus[0][1].quantity);
    for (let i = 1; i <= skus[0][1].quantity && i <= 15; i += 1) {
      setAllQuantites((currentQuantites) => [...currentQuantites, i]);
    }
    [skuRef.current] = skus[0];
  }, []);

  return {
    selectedStyle,
    selectedPhoto,
    selectedThumb,
    selectedSize,
    selectedQuantity,
    productSkus,
    skuRef,
    skusNull,
    productQuantity,
    allQuantities,
    setProductSkus,
    setSelectedQuantity,
    setSkusNull,
    setSelectedSize,
  };
});

export default result;
