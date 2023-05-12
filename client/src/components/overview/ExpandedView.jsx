import React from 'react';

function ExpandedView({ selectedPhoto, setExpanded }) {
  return (
    <div className="expandedView">
      <img src={selectedPhoto} alt={selectedPhoto} onClick={() => setExpanded(false)} />
    </div>
  );
}

export default ExpandedView;
