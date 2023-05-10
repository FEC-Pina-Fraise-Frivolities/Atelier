/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
import React, { useEffect, useId, useState } from 'react';
import Checkbox from './Details/Checkbox';

function GalleryView({
  selectedStyle, selectedPhoto, setSelectedPhoto, selectedThumb, setSelectedThumb,
}) {
  const placeholderImage = 'https://i.ibb.co/HB10cH4/not-found.jpg';

  const handleClick = (e) => {
    setSelectedThumb(e.target.src);
    setSelectedPhoto(e.target.srcset);
  };

  if (!selectedStyle.photos) {
    return;
  }

  return (
    <div className="galleryView">
      <img className="mainPhoto" src={selectedPhoto} alt={selectedStyle.name} />
      <div className="thumbnails">

        {selectedStyle.photos.map((img) => (
          <div
            className="thumbnail"
            key={img.url}
          >
            <Checkbox selectedThumb={selectedThumb} thumb={img.thumbnail_url} />
            <div className="thumbPhotoFrame">
              <img
                className="thumb"
                src={img.thumbnail_url || placeholderImage}
                alt={selectedStyle.name}
                srcSet={img.url || placeholderImage}
                onClick={handleClick}
              />
            </div>
          </div>
        ))}

      </div>
    </div>

  );
}

export default GalleryView;
