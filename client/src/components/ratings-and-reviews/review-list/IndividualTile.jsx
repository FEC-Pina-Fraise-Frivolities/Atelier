import { React, useState } from 'react';
import axios from 'axios';
import Star from './Star';
import Body from './Body';

function IndividualTile({ review }) {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  function helpfulHandler(e) {
    axios.put('/reviews/helpful', { review_id: review.review_id })
      .then(() => {
        setHelpfulness(helpfulness + 1);
        e.target.disabled = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="review container">
      <Star rating={review.rating} />
      <div className="name-date">
        {review.reviewer_name}
        {' '}
        on
        {' '}
        {new Date(review.date).toLocaleDateString(
          'en-us',
          { year: 'numeric', month: 'short', day: 'numeric' },
        )}
      </div>
      <h3>{review.summary}</h3>
      <Body body={review.body} photos={review.photos} />
      {review.recommend ? (
        <div className="recommend">
          <span>&#10003;</span>
          I recommend this product
        </div>
      ) : null}
      {review.response ? (
        <div className="response">
          <b>Response:</b>
          <p>{review.response}</p>
        </div>
      ) : null}
      <div className="helpful">
        Helpful?
        {' '}
        <button type="button" onClick={helpfulHandler}>
          Yes
          {` (${helpfulness})`}
        </button>
      </div>
    </div>
  );
}

export default IndividualTile;
