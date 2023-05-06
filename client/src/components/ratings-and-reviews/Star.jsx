import React from 'react';

function Star({rating}) {


  return (
    <div className="star">
      <div className="filled-star" style={{ width: `${(rating / 5) * 100}%`, overflow: 'hidden' }}>
        {[...Array(5)].map((star, index) => (
          <span key={index} >&#9733;</span>))}
      </div>
      <div className="empty-star">
        {[...Array(5)].map((star, index) => (
          <span key={index + 5} >&#9733;</span>))}
      </div>
    </div>
  );
}

export default Star;
