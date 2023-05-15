import { React,
  useState,
  useEffect,
  createContext,
} from 'react';
import axios from 'axios';
import ReviewList from './review-list/ReviewList';
import RatingBD from './rating-summary/RatingBD';
import ProductBD from './rating-summary/ProductBD';
import AddReviewForm from './add-review-form/AddReviewForm';

export const FilterContext = createContext('filter');

function RatingAndReview({ productId }) {
  // Component states
  const [reviews, setReviews] = useState([]);
  const [reviewMeta, setReviewMeta] = useState({});
  // const [numReviews, setNumReviews] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [reviewParams, setReviewParams] = useState({ sort: 'relevant', count: 3 });
  const [buttonToggle, setButtonToggle] = useState(true);
  const [filterReview, setFilterReview] = useState([]);

  // Use effect initialization - get reviews data from API
  useEffect(() => {
    const paramsMeta = {
      product_id: productId,
    };
    const paramsReviews = {
      product_id: productId,
      sort: reviewParams.sort,
      count: reviewParams.count,
    };
    Promise.all([axios.get('/reviews', { params: paramsReviews }), axios.get('/reviews/meta', { params: paramsMeta })])
      .then((results) => {
        setReviews(results[0].data.results);
        setReviewMeta(results[1].data);
        // setNumReviews(Number(results[1].data.recommended.false)
        // + Number(results[1].data.recommended.true));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  // Handle on and off for modal
  function modalHandler() {
    setShowForm(!showForm);
  }

  // Handle when more review
  function moreReviewHandler() {
    const params = {
      product_id: productId,
      sort: reviewParams.sort,
      count: reviewParams.count + 10,
    };
    axios.get('/reviews', { params })
      .then((result) => {
        if (result.data.results.length < (reviewParams.count + 10)) {
          setButtonToggle(false);
        }
        setReviews(result.data.results);
        setReviewParams({ ...reviewParams, count: reviewParams.count + 10 });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Handle when sort review
  function sortReviewHandler(e) {
    console.log('sort handler triggered');
    const params = {
      product_id: productId,
      sort: e.target.value,
      count: reviewParams.count,
    };
    axios.get('/reviews', { params })
      .then((result) => {
        setReviews(result.data.results);
        setReviewParams({ ...reviewParams, sort: e.target.value });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <FilterContext.Provider value={{filterReview, setFilterReview}}>
      <div className="rating-and-review">
        <h2 id="subtitle">Ratings and Reviews</h2>
        {reviews.length && Object.keys(reviewMeta).length
          ? (
            <>
              <div className="summary container">
                <RatingBD
                  ratings={reviewMeta.ratings}
                  recommended={reviewMeta.recommended}
                />
                <ProductBD characteristics={reviewMeta.characteristics} />
              </div>
              <ReviewList
                reviews={reviews}
                buttonToggle={buttonToggle}
                modalHandler={modalHandler}
                moreReviewHandler={moreReviewHandler}
                sortReviewHandler={sortReviewHandler}
              />
              <AddReviewForm
                characteristics={reviewMeta.characteristics}
                showForm={showForm}
                modalHandler={modalHandler}
                productId={productId}
              />
            </>
          ) : <span>loading...</span>}
      </div>
    </FilterContext.Provider>
  );
}

export default RatingAndReview;
