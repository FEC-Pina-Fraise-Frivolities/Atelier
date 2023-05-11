import React from 'react';
import placeholderImage from '../../../../assets/index';
import Checkbox from '../utils/Checkbox';

function StylePhoto(
  {
    style,
    selectedStyle,
    selectedPhoto,
    setSelectedStyle,
    setSelectedPhoto,
    setSelectedThumb,
  },
) {
  const photoIdx = selectedStyle.photos.findIndex((photo) => photo.url === selectedPhoto);

  const photoSrc = style.photos[photoIdx].url;
  const thumbSrc = style.photos[0].thumbnail_url;
  const thumbSrcIdx = style.photos[photoIdx].thumbnail_url;

  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };

  return (
    <div
      className="style"
      onClick={() => {
        setSelectedStyle(style);
        setSelectedPhoto(photoSrc || placeholderImage);
        setSelectedThumb(thumbSrcIdx || placeholderImage);
      }}
    >
      <Checkbox selectedStyle={selectedStyle} style={style} />
      <div className="stylePhotoFrame">
        <img
          className="stylePhoto"
          src={thumbSrc || placeholderImage}
          alt={style.name}
          onError={onImageError}
        />
      </div>
    </div>

  );
}

export default StylePhoto;
