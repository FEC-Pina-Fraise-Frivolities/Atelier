// TODO: FIX QUANTITY RERENDERING WHEN CHANGING STYLES
import React, { useEffect, useState } from 'react';

function QuantitySelector({
  selectedStyle,
  selectedSize,
  skusNull,
  selectedQuantity,
  setSelectedQuantity,
}) {
  const [productQuantity, setProductQuantity] = useState(0);
  const [allQuantities, setAllQuantites] = useState([]);

  useEffect(() => {
    if (Object.keys(selectedStyle).length > 0) {
      const skus = Object.entries(selectedStyle.skus);
      for (let i = 0; i < skus.length; i += 1) {
        if (skus[i][1].size === selectedSize) {
          setProductQuantity(() => skus[i][1].quantity);
        }
      }
    }
  }, [selectedSize, selectedStyle, selectedQuantity]);

  useEffect(() => {
    setAllQuantites([]);
    for (let i = 1; i <= productQuantity && i <= 15; i += 1) {
      setAllQuantites((currentQuantites) => [...currentQuantites, i]);
    }
  }, [productQuantity]);

  useEffect(() => {
    if (productQuantity > 0 && productQuantity < selectedQuantity) {
      setSelectedQuantity(productQuantity);
    }
  }, [selectedStyle, productQuantity, selectedQuantity, setSelectedQuantity]);

  const handleChange = (e) => {
    setSelectedQuantity(e.target.value);
  };

  if (skusNull || !selectedSize) {
    return '';
  }

  return (
    <div className="quantitySelector">
      <label>
        Quantity
        {' '}
        <select
          value={selectedQuantity}
          onChange={handleChange}
        >
          {allQuantities.map((quantity) => (
            <option value={quantity} key={quantity}>
              {quantity}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default QuantitySelector;
