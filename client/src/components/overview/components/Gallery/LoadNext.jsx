import React from 'react';

function LoadNext({
  factor, selectedStyle, nextThumbs,
}) {
  if ((factor + 1) * 7 < selectedStyle.photos.length) {
    return (
      <div className="loadMoreThumbs" onClick={nextThumbs} />
    );
  }
  return '';
}

export default LoadNext;
