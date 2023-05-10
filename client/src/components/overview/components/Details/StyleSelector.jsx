/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import Checkbox from './Checkbox';
import StylePhoto from './StylePhoto';

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
          <StylePhoto
            key={style.style_id}
            style={style}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            setSelectedPhoto={setSelectedPhoto}
          />
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;
