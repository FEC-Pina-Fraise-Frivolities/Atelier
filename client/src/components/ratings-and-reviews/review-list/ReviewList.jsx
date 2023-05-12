import React from 'react';
import IndividualTile from './IndividualTile';

function ReviewList({
  reviews, buttonToggle, modalHandler, moreReviewHandler, sortReviewHandler,
}) {
  return reviews.length === 0 ? '' : (
    <div className="list container">
      <h3>
        {/* eslint "react/jsx-one-expression-per-line":0 */}
        {reviews.length} Reviews, sorted by
        <select name="sorts" onChange={sortReviewHandler}>
          <option value="relevent">Relevent</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
      </h3>
      <div id="scrollable-list">
        {reviews.map((review) => (
          <IndividualTile review={review} key={review.review_id} />
        ))}
      </div>
      {buttonToggle ? <button type="button" onClick={moreReviewHandler}>More review</button> : <span>All reviews loaded</span>}
      <button type="button" onClick={modalHandler}>Add a review</button>
    </div>
  );
}

export default ReviewList;
