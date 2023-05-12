import React from 'react';

function MainPhotoArrows(
  {
    selectedStyle,
    selectedPhoto,
    setSelectedPhoto,
    setSelectedThumb,
  },
) {
  const photoIdx = selectedStyle.photos.findIndex((photo) => photo.url === selectedPhoto);

  const loadNextPhoto = () => {
    console.log('photoIdx: ', photoIdx);
    if (photoIdx < selectedStyle.photos.length - 1) {
      setSelectedPhoto(selectedStyle.photos[photoIdx + 1].url);
      setSelectedThumb(selectedStyle.photos[photoIdx + 1].thumbnail_url);
    }
  };

  const loadPrevPhoto = () => {
    console.log('photoIdx: ', photoIdx);
    if (photoIdx > 0) {
      setSelectedPhoto(selectedStyle.photos[photoIdx - 1].url);
      setSelectedThumb(selectedStyle.photos[photoIdx - 1].thumbnail_url);
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
