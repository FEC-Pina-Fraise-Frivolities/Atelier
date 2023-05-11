import React from 'react';
import placeholderImage from '../../../../assets/index';
import Checkbox from '../utils/Checkbox';

function Thumbnail(
  {
    img,
    selectedStyle,
    selectedThumb,
    setSelectedThumb,
    setSelectedPhoto,
    indexOfThumb,
  },
) {
  const handleClick = (e) => {
    console.log('indexOf thumb: ', indexOfThumb);
    setSelectedThumb(e.target.src);
    setSelectedPhoto(e.target.srcset);
  };

  return (
    <div className="thumbnail">
      <Checkbox selectedThumb={selectedThumb} thumb={img.thumbnail_url || placeholderImage} />
      <div className="thumbPhotoFrame" key={img.thumbnail_url}>
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
