import React from 'react';
import Thumbnail from './Thumbnail';

function GalleryView({
  selectedStyle, selectedPhoto, setSelectedPhoto, selectedThumb, setSelectedThumb,
}) {
  if (!selectedStyle.photos) {
    return;
  }

  return (
    <div className="galleryView">
      <img className="mainPhoto" src={selectedPhoto} alt={selectedStyle.name} />
      <div className="thumbnails">

        {selectedStyle.photos.map((img) => (
          <Thumbnail
            img={img}
            selectedStyle={selectedStyle}
            selectedThumb={selectedThumb}
            setSelectedThumb={setSelectedThumb}
            setSelectedPhoto={setSelectedPhoto}
          />
        ))}

      </div>
    </div>

  );
}

export default GalleryView;
