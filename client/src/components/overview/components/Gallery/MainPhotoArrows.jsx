import React from 'react';

function MainPhotoArrows(
  {
    selectedStyle,
    selectedPhoto,
    setSelectedPhoto,
    setSelectedThumb,
    nextThumbs,
    prevThumbs,
    factor,
    displayedThumbs,
  },
) {
  const photoIdx = selectedStyle.photos.findIndex((photo) => photo.url === selectedPhoto);

  const loadNextPhoto = () => {
    if (photoIdx < selectedStyle.photos.length - 1) {
      setSelectedPhoto(selectedStyle.photos[photoIdx + 1].url);
      setSelectedThumb(selectedStyle.photos[photoIdx + 1].thumbnail_url);
    }
    if (photoIdx >= ((factor + 1) * displayedThumbs.length) - 1) {
      nextThumbs();
    }
  };

  const loadPrevPhoto = () => {
    if (photoIdx > 0) {
      setSelectedPhoto(selectedStyle.photos[photoIdx - 1].url);
      setSelectedThumb(selectedStyle.photos[photoIdx - 1].thumbnail_url);
    }
    if (factor > 0 && (photoIdx < displayedThumbs.length * 2)) {
      prevThumbs();
    }
  };

  // if (photoIdx > 0) {
  return (
    <>
      <div className="nextPhoto" onClick={loadNextPhoto} />
      <div className="prevPhoto" onClick={loadPrevPhoto} />
    </>

  );
  // }
  // return '';
}

export default MainPhotoArrows;
