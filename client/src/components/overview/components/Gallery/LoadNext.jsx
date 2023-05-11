import React from 'react';

function LoadNext({ factor, setFactor, selectedStyle }) {
  const nextThumbs = () => {
    if ((factor + 1) * 7 < selectedStyle.photos.length) {
      setFactor((currFactor) => currFactor + 1);
    }
  };

  if ((factor + 1) * 7 < selectedStyle.photos.length) {
    return (
      <div className="loadMoreThumbs" onClick={nextThumbs} />
    );
  }
  return '';
}

export default LoadNext;
