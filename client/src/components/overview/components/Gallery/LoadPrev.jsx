import React from 'react';

function LoadPrev({ factor, setFactor }) {
  const prevThumbs = () => {
    if (factor > 0) { setFactor((currFactor) => currFactor - 1); }
  };

  if (factor > 0) {
    return (<div className="loadPrevThumbs" onClick={prevThumbs} />);
  }
  return (
    ''
  );
}

export default LoadPrev;
