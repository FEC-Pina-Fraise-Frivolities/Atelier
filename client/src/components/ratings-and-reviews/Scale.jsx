import React from 'react';

function Scale({ characteristic, category }) {
  return characteristic === undefined ? '' : (
    <div className="character container">
      <p>{category}</p>
      <div className="scale container">
        {/* eslint "react/self-closing-comp":0 */}
        <div className="triangle-down" style={{ left: `${(Number(characteristic.value) / 5) * 100}%` }}></div>
        <div className="scale-bars">
          <div className="scale-bar"></div>
          <div className="scale-bar"></div>
          <div className="scale-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Scale;
