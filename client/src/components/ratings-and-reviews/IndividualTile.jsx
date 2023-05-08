import React from 'react';
import Star from './Star';

function IndividualTile({ review }) {
  return (
    <div className="review container">
      <Star rating={review.rating}/>
      <div>
        {review.reviewer_name}
        ,{review.date}
      </div>
      <h3>{review.summary}</h3>
      <div>{review.body}</div>
      <div>{review.recommend ? 'I recommend this product' : ''}</div>
      <div>{review.response ? review.response : <></>}</div>
      <div>Helpful? Yes{`(${review.helpfulness})`}</div>
    </div>
  )
}

export default IndividualTile;
