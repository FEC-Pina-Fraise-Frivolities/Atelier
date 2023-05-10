/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';

function StyleSelector(
  {
    productStyles, selectedStyle, setSelectedStyle, setSelectedPhoto,
  },
) {
  return (
    <div className="styleSelector">
      <div className="selectedStyleName">{selectedStyle.name}</div>
      <div className="productStyles">
        {productStyles.map((style) => (
          <div
            className="style"
            key={style.style_id}
            onClick={() => {
              setSelectedStyle(style);
              setSelectedPhoto(style.photos[0].url);
              console.log('selectedStyle:', style);
            }}
          >
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

export default StyleSelector;