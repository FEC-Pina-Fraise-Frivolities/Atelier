import React, { useEffect, useState } from 'react';

function ProductStyles({ productStyles }) {
  return (
    <div className="productStyles">
      {/* productStyles: */}
      {productStyles.map((style) => (
        <div key={style.style_id}>
          {/* <div className="styleName">
            Name:
            {' '}
            {style.name}
          </div> */}
          <div className="stylePhotoFrame">
            <img className="stylePhoto" src={style.photos[0].thumbnail_url} alt={style.name} />
          </div>
        </div>
      ))}
    </div>

  );
}

export default ProductStyles;
