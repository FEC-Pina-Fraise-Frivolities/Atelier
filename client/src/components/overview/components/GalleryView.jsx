/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';

function GalleryView({ selectedStyle, setSelectedStyle }) {
  if (!selectedStyle.name) {
    return;
  }
  const photoUrls = selectedStyle.photos.map((photo) => photo.url);
  const thumbnailUrls = selectedStyle.photos.map((photo) => photo.thumbnail_url);

  return (
    <div className="galleryView">
      <img src={photoUrls[0]} alt={selectedStyle.name} />
    </div>

  );
}

export default GalleryView;
