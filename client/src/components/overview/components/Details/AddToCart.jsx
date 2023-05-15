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
    const skuId = skuRef.current;
    console.log(`You have added ${selectedQuantity} size ${selectedSize} ${selectedStyle.name} ${productData.name} (skuId: ${skuId}) to your cart`);
    const endpoint = `http://localhost:3000/cart?${new URLSearchParams({
      sku_id: skuId,
    })}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sku_id: skuId,
      }),
    };
    fetch(endpoint, options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => {
        console.log('add to cart failed', err);
      });
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
