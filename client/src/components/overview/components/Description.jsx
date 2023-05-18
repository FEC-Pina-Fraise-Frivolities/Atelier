import React, { useEffect, useState } from 'react';

function Description({ productData, selectedStyle }) {
  const [styleName, setStyleName] = useState('');

  useEffect(() => {
    if (selectedStyle) {
      setStyleName(selectedStyle.name);
    }
    console.log('styleName: ', styleName);
  }, [selectedStyle, styleName]);

  return (
    <div className="productDescription">
      {' '}
      <h3>{productData.name}</h3>
      <h5><em>{styleName}</em></h5>
      {productData.description}
    </div>
  );
}

export default Description;
