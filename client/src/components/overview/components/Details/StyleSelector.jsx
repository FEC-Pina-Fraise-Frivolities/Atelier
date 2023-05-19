import React from 'react';
import StylePhoto from './StylePhoto';

function StyleSelector(
  {
    productStyles,
    selectedStyle,
    selectedPhoto,
    setSelectedStyle,
    setSelectedPhoto,
    setSelectedThumb,

  },
) {
  return (
    <div className="styleSelector">
      <div className="selectedStyleName"><em>{selectedStyle.name}</em></div>
      <div className="productStyles">
        {productStyles.map((style) => (
          <StylePhoto
            key={style.style_id}
            style={style}
            selectedPhoto={selectedPhoto}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
            setSelectedPhoto={setSelectedPhoto}
            setSelectedThumb={setSelectedThumb}
          />
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;
