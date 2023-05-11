/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import LoadNext from './LoadNext';
import LoadPrev from './LoadPrev';
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

  useEffect(() => {
    const start = factor * 7;
    const end = (factor + 1) * 7;
    if (start < selectedStyle.photos.length) {
      setDisplayedThumbs(selectedStyle.photos.slice(start, end));
    }
  }, [factor, selectedStyle]);

  return (
    <div className="galleryView">
      <LoadPrev factor={factor} setFactor={setFactor} />
      <img className="mainPhoto" src={selectedPhoto} alt={selectedStyle.name} />
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
      <LoadNext factor={factor} setFactor={setFactor} selectedStyle={selectedStyle} />
    </div>

  );
}

export default GalleryView;
