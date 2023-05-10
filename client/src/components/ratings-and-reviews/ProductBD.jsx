import React from 'react';
import Scale from './Scale';

function ProductBD({ characteristics }) {
  return (
    <div className="product container">
      {Object.keys(characteristics).map((key) => (
        <Scale characteristic={characteristics[key]} category={key} key={key} />
      ))}
    </div>
  );
}

export default ProductBD;
