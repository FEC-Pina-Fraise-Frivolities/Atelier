import React, { useEffect, useState } from 'react';

function SizeSelector({
  selectedStyle, selectedSize, setSelectedSize, skusNull, setSkusNull,
}) {
  const [productAllSizes, setProductAllSizes] = useState([]);

  useEffect(() => {
    setProductAllSizes([]);
    setSkusNull(false);
    if (Object.keys(selectedStyle).length > 0) {
      if (selectedStyle.skus.null) {
        setSkusNull(true);
        return;
      }
      const skus = Object.entries(selectedStyle.skus);
      for (let i = 0; i < skus.length; i += 1) {
        setProductAllSizes((currentSizes) => [...currentSizes, skus[i][1].size]);
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
        {productAllSizes.map((size) => <option value={size} key={size}>{size}</option>)}
      </select>
    </div>

  );
}

export default SizeSelector;
