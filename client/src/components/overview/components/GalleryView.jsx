/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
import React, { useEffect, useId, useState } from 'react';

function GalleryView({ selectedStyle, setSelectedStyle }) {
  if (!selectedStyle.name) {
    return;
  }
  const photoUrls = selectedStyle.photos.map((photo) => photo.url);
  const thumbnailUrls = selectedStyle.photos.map((photo) => photo.thumbnail_url);
  const [selectedPhoto, setSelectedPhoto] = useState(photoUrls[0]);

  const handleClick = (e) => {
    console.log('e.target.value: ', e.target.src);
    setSelectedPhoto(e.target.src);
  };

  return (
    <div className="galleryView">
      <img className="mainPhoto" src={selectedPhoto} alt={selectedStyle.name} />
      <div className="thumbnails">

        {thumbnailUrls.map((thumbnail) => (
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
