import React from 'react';
import QAListView from './QAListView';

function QAIndex({ productId }) {
  return (
    <div className="qa">
      <div className="qaTitle">
        <h2>
          QUESTIONS & ANSWERS
        </h2>
      </div>
      <div className="qaListView"><QAListView productId={productId} /></div>
    </div>
  );
}

export default QAIndex;
