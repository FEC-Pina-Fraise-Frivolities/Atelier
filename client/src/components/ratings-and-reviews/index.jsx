import { React, useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './review-list/ReviewList';
import RatingBD from './rating-summary/RatingBD';
import ProductBD from './rating-summary/ProductBD';
import AddReviewForm from './add-review-form/AddReviewForm';

function RatingAndReview({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});
  const [numReviews, setNumReviews] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const params = {
      product_id: productId,
    };
    Promise.all([axios.get('/reviews', { params }), axios.get('/reviews/meta', { params })])
      .then((results) => {
        setReviews(results[0].data.results);
        setReviewMeta(results[1].data);
        setNumReviews(Number(results[1].data.recommended.false)
        + Number(results[1].data.recommended.true));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  function modalHandler() {
    setShowForm(!showForm);
  }

  return (
    <div className="rating-and-review">
      <h2 id="subtitle">Ratings and Reviews</h2>
      <div className="summary container">
        {Object.keys(reviewMeta).length === 0 ? ''
          : (
            <RatingBD
              ratings={reviewMeta.ratings}
              recommended={reviewMeta.recommended}
              numReviews={numReviews}
            />
          )}
        {Object.keys(reviewMeta).length === 0 ? '' : (
          <ProductBD characteristics={reviewMeta.characteristics} />
        )}
      </div>
      <ReviewList reviews={reviews} numReviews={numReviews} modalHandler={modalHandler}/>
      {Object.keys(reviewMeta).length === 0 ? '' : (
        <AddReviewForm
          characteristics={reviewMeta.characteristics}
          showForm={showForm}
          modalHandler={modalHandler}
          productId={productId}
        />
      )}
    </div>
  );
}

export default RatingAndReview;
