import React, { useRef, useState } from 'react';
import AddToCart from './AddToCart';
import QuantitySelector from './QuantitySelector';
import SizeSelector from './SizeSelector';
import StyleSelector from './StyleSelector';

function ProductDetails(
  {
    productData,
    productStyles,
    selectedStyle,
    selectedPhoto,
    setSelectedStyle,
    setSelectedPhoto,
    setSelectedThumb,
  },
) {
  const [selectedSize, setSelectedSize] = useState('');
  const [skusNull, setSkusNull] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [productSkus, setProductSkus] = useState([]);
  const skuRef = useRef(0);

  return (
    <div className="productDetails">

      <StyleSelector
        productStyles={productStyles}
        selectedStyle={selectedStyle}
        selectedPhoto={selectedPhoto}
        setSelectedStyle={setSelectedStyle}
        setSelectedPhoto={setSelectedPhoto}
        setSelectedThumb={setSelectedThumb}
      />
      <div className="sizeAndQuantitySelector">
        <SizeSelector
          selectedStyle={selectedStyle}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          skusNull={skusNull}
          setSkusNull={setSkusNull}
          productSkus={productSkus}
          setProductSkus={setProductSkus}
          skuRef={skuRef}
        />
        <QuantitySelector
          selectedStyle={selectedStyle}
          selectedSize={selectedSize}
          skusNull={skusNull}
          selectedQuantity={selectedQuantity}
          setSelectedQuantity={setSelectedQuantity}
        />
      </div>
      <AddToCart
        selectedSize={selectedSize}
        selectedQuantity={selectedQuantity}
        skusNull={skusNull}
        skuRef={skuRef}
      />

    </div>
  );
}

export default ProductDetails;
