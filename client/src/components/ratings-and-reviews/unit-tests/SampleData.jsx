import React from 'react';
import axios from 'axios';

/* eslint "no-undef": 0 */
/* eslint "no-unused-vars": 0 */

// Mock props
export const sampleAPIReviewsMeta = {
  product_id: 40348,
  ratings: {
    1: '29',
    2: '11',
    3: '74',
    4: '34',
    5: '70',
  },
  recommended: {
    false: '32',
    true: '186',
  },
  characteristics: {
    Size: {
      id: 135232,
      value: '2.8402061855670103',
    },
    Width: {
      id: 135233,
      value: '2.8930817610062893',
    },
    Comfort: {
      id: 135234,
      value: '3.2083333333333333',
    },
    Quality: {
      id: 135235,
      value: '3.3333333333333333',
    },
  },
};

export const sampleAPIReviews = {
  product: 40348,
  page: 0,
  count: 100,
  results: [
    {
      review_id: 1280006,
      rating: 5,
      summary: 'Pretty dang good',
      recommend: true,
      response: null,
      body: 'Pretty much what I expected. Shoes that go on my feet.',
      date: '2023-05-17T00:00:00.000Z',
      reviewer_name: 'yeah',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 1279976,
      rating: 4,
      summary: 'Great shoes',
      recommend: true,
      response: null,
      body: 'Minus 1 point just because they are not as comfortable as my slippers.',
      date: '2023-05-17T00:00:00.000Z',
      reviewer_name: 'home body',
      helpfulness: 0,
      photos: [],
    },
  ],
};

export const reviews = sampleAPIReviews.results;
// Mock states
// export const [reviews, setReviews] = useState(sampleReviews);
// export const [showForm, setShowForm] = useState(false);
// export const [reviewParams, setReviewParams] = useState({ sort: 'relevant', count: 3 });
// export const [buttonToggle, setButtonToggle] = useState(true);
// export const [filterReview, setFilterReview] = useState([]);
export const filterReview = [];
export const buttonToggle = true;
export const reviewParams = { sort: 'relevant', count: 3 };

// Mock handlers
export function modalHandler() {
  setShowForm(!showForm);
}

export function moreReviewHandler() {
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

export function sortReviewHandler(e) {
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
