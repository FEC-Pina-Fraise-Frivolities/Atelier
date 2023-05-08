import React from 'react';
import IndividualTile from './IndividualTile';

function ReviewList({ reviews }) {
  return (
    <div className="list container">
      <h3>
        {reviews.length} Reviews, sorted by <u>relevance</u>
      </h3>
      {reviews.map((review) => (
        <IndividualTile review={review} key={review.review_id}/>
      ))}
    </div>
  );
}

export default ReviewList;
