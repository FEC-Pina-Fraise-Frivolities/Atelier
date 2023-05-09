import React from 'react';

function Star({ rating }) {
  return (
    <div className="star">
      <div className="filled-star" style={{ width: `${(rating / 5) * 100}%`, overflow: 'hidden' }}>
        {[1, 2, 3, 4, 5].map((element) => (
          <span key={element}>&#9733;</span>))}
      </div>
      <div className="empty-star">
        {[1, 2, 3, 4, 5].map((element) => (
          <span key={element + 5}>&#9733;</span>))}
      </div>
    </div>
  );
}

export default Star;
