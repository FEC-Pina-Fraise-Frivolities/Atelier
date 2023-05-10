/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Checkbox from './Checkbox';

function StylePhoto({
  style, selectedStyle, setSelectedStyle, setSelectedPhoto,
}) {
  return (
    <div
      className="style"
      onClick={() => {
        setSelectedStyle(style);
        setSelectedPhoto(style.photos[0].url);
        console.log('selectedStyle:', style);
      }}
    >
      <div className="selector">{style === selectedStyle && <div className="checkmark">✔</div>}</div>
      <div className="stylePhotoFrame">
        <img className="stylePhoto" src={style.photos[0].thumbnail_url} alt={style.name} />
      </div>
    </div>

  );
}

export default StylePhoto;
