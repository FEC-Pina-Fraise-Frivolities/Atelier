/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Checkbox from './Checkbox';

function StylePhoto({
  style, selectedStyle, setSelectedStyle, setSelectedPhoto, setSelectedThumb,
}) {
  const photoSrc = style.photos[0].url;
  const thumbSrc = style.photos[0].thumbnail_url;
  const placeholderImage = 'https://i.ibb.co/HB10cH4/not-found.jpg';

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
