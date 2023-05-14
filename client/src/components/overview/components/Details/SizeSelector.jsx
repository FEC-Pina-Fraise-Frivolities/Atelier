import React, { useEffect, useRef } from 'react';

function SizeSelector({
  selectedStyle,
  selectedSize,
  setSelectedSize,
  skusNull,
  setSkusNull,
  productSkus,
  setProductSkus,
  skuRef,
}) {
  useEffect(() => {
    setProductSkus([]);
    setSkusNull(false);
    if (Object.keys(selectedStyle).length > 0) {
      if (selectedStyle.skus.null) {
        setSkusNull(true);
        return;
      }
      const skus = Object.entries(selectedStyle.skus);
      for (let i = 0; i < skus.length; i += 1) {
        setProductSkus((currSkus) => [...currSkus, skus[i]]);
      }
    }
  }, [selectedStyle, setSkusNull, setProductSkus]);

  useEffect(() => {
  }, [selectedSize, skuRef]);

  const handleChange = (e) => {
    setSelectedSize(e.target.value);
    skuRef.current = document.querySelector(`option[value=${e.target.value}]`).getAttribute('id');
  };

  if (skusNull) {
    return '';
  }

  return (
    <div className="sizeSelector">
      <select
        value={selectedSize}
        ref={skuRef}
        onChange={handleChange}
      >
        <option value="">Please select a size</option>
        {productSkus.map((sku) => (
          <option
            value={sku[1].size}
            id={sku[0]}
            key={sku[0]}
          >
            {sku[1].size}
          </option>
        ))}
      </select>
    </div>

  );
}

export default SizeSelector;
