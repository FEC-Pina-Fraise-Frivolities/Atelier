import { React, useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import RatingBD from './RatingBD';
import ProductBD from './ProductBD';


const output = {
  "product": "40348",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 1277115,
          "rating": 3,
          "summary": "ok ef dfsd sdr",
          "recommend": true,
          "response": null,
          "body": "ffffksldkfsdlkfsdkflksdfklsldfksdlkflskdflksdfklskldfklsjlkhlhkjhkhkhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhdflksdfkllk",
          "date": "2022-10-24T00:00:00.000Z",
          "reviewer_name": "affffff",
          "helpfulness": 3,
          "photos": []
      },
      {
          "review_id": 1277102,
          "rating": 3,
          "summary": "ok ef dfsd sdr",
          "recommend": true,
          "response": null,
          "body": "ffffksldkfsdlkfsdkflksdfklsldfksdlkflskdflksdfklskldfklsjlkhlhkjhkhkhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhdflksdfkllk",
          "date": "2022-10-24T00:00:00.000Z",
          "reviewer_name": "affffff",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277101,
          "rating": 3,
          "summary": "ok ef dfsd sdr",
          "recommend": true,
          "response": null,
          "body": "ffffksldkfsdlkfsdkflksdfklsldfksdlkflskdflksdfklskldfklsjlkhlhkjhkhkhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhdflksdfkllk",
          "date": "2022-10-24T00:00:00.000Z",
          "reviewer_name": "affffff",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1277118,
          "rating": 3,
          "summary": "ok ef dfsd sdr",
          "recommend": true,
          "response": null,
          "body": "ffffksldkfsdlkfsdkflksdfklsldfksdlkflskdflksdfklskldfklsjlkhlhkjhkhkhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhdflksdfkllk",
          "date": "2022-10-24T00:00:00.000Z",
          "reviewer_name": "affffff",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 1279303,
          "rating": 4,
          "summary": "lame.",
          "recommend": false,
          "response": null,
          "body": "don't like it",
          "date": "2023-03-26T00:00:00.000Z",
          "reviewer_name": "Yale",
          "helpfulness": 0,
          "photos": []
      }
  ]
};

const characteristics = {
  "Size": {
      "id": 135232,
      "value": "2.8709677419354839"
  },
  "Width": {
      "id": 135233,
      "value": "2.8500000000000000"
  },
  "Comfort": {
      "id": 135234,
      "value": "3.2558139534883721"
  },
  "Quality": {
      "id": 135235,
      "value": "3.3488372093023256"
  }
}


const RatingAndReview = function () {

  const [reviews, setReviews] = useState(output.results);

  return (
    <>
      <RatingBD reviews={reviews} />
      <ProductBD />
      <ReviewList reviews={reviews} />
    </>
  )
}

export default RatingAndReview;
