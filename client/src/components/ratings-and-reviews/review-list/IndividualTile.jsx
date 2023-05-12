import { React, useState } from 'react';
import axios from 'axios';
import Star from './Star';

function IndividualTile({ review }) {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  function helpfulHandler(e) {
    console.log('click triggered');
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
      <div>
        {review.reviewer_name}
        ,
        {new Date(review.date).toLocaleDateString(
          'en-us',
          { year: 'numeric', month: 'short', day: 'numeric' },
        )}
      </div>
      <h3>{review.summary}</h3>
      <div>{review.body}</div>
      {review.recommend ? (
        <div>
          <span>&#10003;</span>
          I recommend this product
        </div>
      ) : null}
      <div>{review.response ? review.response : ''}</div>
      <div>
        Helpful?
        <button type="button" onClick={helpfulHandler}> Yes</button>
        {`(${helpfulness})`}
      </div>
    </div>
  );
}

export default IndividualTile;
