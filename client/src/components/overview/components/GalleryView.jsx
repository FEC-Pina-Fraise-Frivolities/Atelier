/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
import React, { useEffect, useId, useState } from 'react';

function GalleryView({ selectedStyle, selectedPhoto, setSelectedPhoto }) {
  const handleClick = (e) => {
    console.log('e.target.value: ', e.target.src);
    setSelectedPhoto(e.target.src);
  };

  if (!selectedStyle.photos) {
    return;
  }
  const thumbnails = selectedStyle.photos.map((photo) => photo.thumbnail_url);

  return (
    <div className="galleryView">
      <img className="mainPhoto" src={selectedPhoto} alt={selectedStyle.name} />
      <div className="thumbnails">

        {thumbnails.map((thumbnail) => (
          <img
            className="thumbnail"
            src={thumbnail}
            alt={selectedStyle.name}
            key={useId()}
            onClick={handleClick}
          />
        ))}

      </div>
    </div>

  );
}

export default GalleryView;
