import React from 'react';

function AddToCart({
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
    const endpoint = '/cart';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sku_id: skuId,
      }),
    };
    for (let i = 0; i < selectedQuantity; i += 1) {
      fetch(endpoint, options)
        .then((res) => {
          res.text();
        })
        .catch((err) => {
          console.error('add to cart failed', err);
        });
    }
  };

  if (skusNull) {
    return null;
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
