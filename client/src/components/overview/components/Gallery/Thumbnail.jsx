import React from 'react';
import placeholderImage from '../../index';
import Checkbox from '../utils/Checkbox';

function Thumbnail({
  img, selectedStyle, selectedThumb, setSelectedThumb, setSelectedPhoto,
}) {
  const handleClick = (e) => {
    setSelectedThumb(e.target.src);
    setSelectedPhoto(e.target.srcset);
  };

  return (
    <div
      className="thumbnail"
      key={img.url}
    >
      <Checkbox selectedThumb={selectedThumb} thumb={img.thumbnail_url || placeholderImage} />
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
  );
}

export default Thumbnail;
