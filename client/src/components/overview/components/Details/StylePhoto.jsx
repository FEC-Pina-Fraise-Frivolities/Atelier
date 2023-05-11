import React, { useState } from 'react';
import placeholderImage from '../../index';
import Checkbox from '../utils/Checkbox';

function StylePhoto({
  style, selectedStyle, setSelectedStyle, setSelectedPhoto, setSelectedThumb,
}) {
  const photoSrc = style.photos[0].url;
  const thumbSrc = style.photos[0].thumbnail_url;

  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };

  return (
    <div
      className="style"
      onClick={() => {
        setSelectedStyle(style);
        setSelectedPhoto(photoSrc || placeholderImage);
        setSelectedThumb(thumbSrc || placeholderImage);
        console.log('selectedStyle:', style);
      }}
    >
      <Checkbox selectedStyle={selectedStyle} style={style} />
      <div className="stylePhotoFrame">
        <img
          className="stylePhoto"
          src={thumbSrc || placeholderImage}
          alt={style.name}
          onError={onImageError}
          onClick={() => console.log('src: ', style.photos[0].thumbnail_url)}
        />
      </div>
    </div>

  );
}

export default StylePhoto;
