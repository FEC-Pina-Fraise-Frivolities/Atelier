import React from 'react';

function ExpandedView({ selectedPhoto, setExpanded }) {
  return (
    <img src={selectedPhoto} alt={selectedPhoto} onClick={() => setExpanded(false)} />
  );
}

export default ExpandedView;
