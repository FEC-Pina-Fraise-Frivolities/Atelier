import React from 'react';

function LoadPrev({ factor, prevThumbs }) {
  if (factor > 0) {
    return (<div className="loadPrevThumbs" onClick={prevThumbs} />);
  }
  return (
    ''
  );
}

export default LoadPrev;
