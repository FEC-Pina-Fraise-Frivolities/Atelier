import React from 'react';

function Bar({ percentage, starName }) {
  return (
    <div className="bar container">
      <span>{starName}</span>
      <div className="double-bar container">
        {/* eslint "react/self-closing-comp":0 */}
        <div className="filled" style={{ width: percentage, overflow: 'hidden' }}></div>
        <div className="empty"></div>
      </div>
    </div>
  );
}

export default Bar;
