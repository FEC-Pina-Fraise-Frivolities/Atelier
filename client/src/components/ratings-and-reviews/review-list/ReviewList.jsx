import React from 'react';
import IndividualTile from './IndividualTile';

function ReviewList({ reviews, numReviews, modalHandler }) {
  return reviews.length === 0 ? '' : (
    <div className="list container">
      <h3>
        {/* eslint "react/jsx-one-expression-per-line":0 */}
        {numReviews} Reviews, sorted by <u>relevance</u>
      </h3>
      {reviews.map((review) => (
        <IndividualTile review={review} key={review.review_id} />
      ))}
      <button type="button" onClick={modalHandler}>Add a review</button>
    </div>
  );
}

export default ReviewList;
