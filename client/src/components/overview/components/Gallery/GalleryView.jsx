/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import LoadNext from './LoadNext';
import LoadPrev from './LoadPrev';
import MainPhotoArrows from './MainPhotoArrows';
import Thumbnail from './Thumbnail';

function GalleryView(
  {
    selectedStyle,
    selectedPhoto,
    setSelectedPhoto,
    selectedThumb,
    setSelectedThumb,

  },
) {
  if (!selectedStyle.photos) {
    return;
  }

  const [displayedThumbs, setDisplayedThumbs] = useState(selectedStyle.photos.slice(0, 7));
  const [factor, setFactor] = useState(0);

  const nextThumbs = () => {
    if ((factor + 1) * 7 < selectedStyle.photos.length) {
      setFactor((currFactor) => currFactor + 1);
    }
  };

  const prevThumbs = () => {
    if (factor > 0) { setFactor((currFactor) => currFactor - 1); }
  };

  useEffect(() => {
    console.log('selectedStyle: ', selectedStyle);
    const start = factor * 7;
    const end = (factor + 1) * 7;
    if (start < selectedStyle.photos.length) {
      setDisplayedThumbs(selectedStyle.photos.slice(start, end));
    }
  }, [factor, selectedStyle, selectedThumb]);

  return (
    <div className="galleryView">
      <LoadPrev
        factor={factor}
        prevThumbs={prevThumbs}
      />
      <MainPhotoArrows
        selectedStyle={selectedStyle}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
        setSelectedThumb={setSelectedThumb}
        nextThumbs={nextThumbs}
        prevThumbs={prevThumbs}
        factor={factor}
        displayedThumbs={displayedThumbs}
      />
      <a href={selectedPhoto} target="blank">
        <img
          className="mainPhoto"
          src={selectedPhoto}
          alt={selectedStyle.name}
          href={selectedPhoto}
        />
      </a>

      <div className="thumbnails">

        {displayedThumbs.map((img) => (
          <Thumbnail
            img={img}
            key={img.url}
            selectedStyle={selectedStyle}
            selectedThumb={selectedThumb}
            setSelectedThumb={setSelectedThumb}
            setSelectedPhoto={setSelectedPhoto}
          />
        ))}

      </div>
      <LoadNext
        factor={factor}
        selectedStyle={selectedStyle}
        nextThumbs={nextThumbs}
      />
    </div>

  );
}

export default GalleryView;
