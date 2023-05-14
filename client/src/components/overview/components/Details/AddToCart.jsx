import React from 'react';

function AddToCart({
  productData,
  selectedStyle,
  selectedSize,
  selectedQuantity,
  skusNull,
  skuRef,
}) {
  const handleClick = (e) => {
    if (!selectedSize) {
      window.alert('Please select a size!');
      return;
    }
    console.log(`You have added ${selectedQuantity} size ${selectedSize} ${selectedStyle.name} ${productData.name} (skuId: ${skuRef.current}) to your cart`);
    // fetch(`http://localhost:3000/cart${new URLSearchParams({
    //   sku_id: skuId,
    // })}`);
  };

  if (skusNull) {
    return '';
  }

  return (
    <button
      className="addToCart"
      type="button"
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
}

export default AddToCart;
