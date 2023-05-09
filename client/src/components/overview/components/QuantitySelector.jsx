import React, { useEffect, useState } from 'react';

function QuantitySelector({ selectedStyle, selectedSize }) {
  const [productQuantity, setProductQuantity] = useState(0);
  const [allQuantities, setAllQuantites] = useState([]);

  useEffect(() => {
    if (Object.keys(selectedStyle).length > 0) {
      const skus = Object.entries(selectedStyle);
      for (let i = 0; i < skus.length; i += 1) {
        if (skus[i].size === selectedSize) {
          setProductQuantity(skus(i).quantity);
        }
      }
      for (let i = 0; i <= productQuantity; i += 1) {
        setAllQuantites((currentQuantites) => [...currentQuantites, i]);
      }
    }
  }, [selectedSize]);

  return (
    <div className="quantitySelector">
      <select
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
      >
        {allQuantities.map((quantity) => (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        ))}
        {/* <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option> */}
      </select>
    </div>
  );
}

export default QuantitySelector;
