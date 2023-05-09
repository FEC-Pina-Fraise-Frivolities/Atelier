/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

function ProductStyles({ productStyles, selectedStyle, setSelectedStyle }) {
  return (
    <div className="styleSelector">
      <div className="selectedStyleName">{selectedStyle.name}</div>
      <div className="productStyles">
        {productStyles.map((style) => (
          <div
            className="style"
            key={style.style_id}
            onClick={() => {
              console.log('selected style is: ', selectedStyle);
              console.log('clicked: ', style.name);
              setSelectedStyle(style);
            }}
          >
            <div className="styleName">
              {style.name}
            </div>
            <div className="checkmark">{style === selectedStyle && '✔'}</div>
            <div className="stylePhotoFrame">
              <img className="stylePhoto" src={style.photos[0].thumbnail_url} alt={style.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductStyles;
