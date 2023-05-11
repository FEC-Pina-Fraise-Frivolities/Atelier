import React, { useState } from 'react';
import Thumbnail from './Thumbnail';

function GalleryView({
  selectedStyle, selectedPhoto, setSelectedPhoto, selectedThumb, setSelectedThumb,
}) {
  if (!selectedStyle.photos) {
    return;
  }

  const [displayedThumbs, setDisplayedThumbs] = useState(selectedStyle.photos.slice(0, 7));
  let factor = 0;

  const loadThumbs = () => {
    factor += 1;
    setDisplayedThumbs(selectedStyle.photos.slice((7 * factor), (7 * (factor + 1))));
  };

  return (
    <div className="galleryView">
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
      <div className="loadMoreThumbs" onClick={loadThumbs} />
    </div>

  );
}

export default GalleryView;
