import React, { useEffect, useState } from 'react';

function SizeSelector({
  selectedStyle, selectedSize, setSelectedSize, skusNull, setSkusNull,
}) {
  const [productSkus, setProductSkus] = useState([]);

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
  }, [selectedStyle]);

  if (skusNull) {
    return '';
  }

  return (
    <div className="sizeSelector">
      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        <option value="">Please select a size</option>
        {productSkus.map((sku) => <option value={sku[1].size} key={sku[0]}>{sku[1].size}</option>)}
      </select>
    </div>

  );
}

export default SizeSelector;
