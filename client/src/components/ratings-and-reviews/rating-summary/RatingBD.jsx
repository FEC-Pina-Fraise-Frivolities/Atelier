import React from 'react';
import Star from '../review-list/Star';
import Bar from './Bar';

function RatingBD({ ratings, recommended, numReviews }) {
  const sumRating = Object.keys(ratings).reduce((accumulator, currentKey) => (
    accumulator + (Number(currentKey) * Number(ratings[currentKey]))), 0);
  const averageRating = (Math.round((sumRating / numReviews) * 10) / 10) || 0;

  // const recommendNumber = reviews.reduce((accumulator, current) => (
  //   accumulator + Number(current.recommend)), 0);
  const percentRecommend = (Math.round((Number(recommended.true) / numReviews) * 10) / 10) || 0;

  // function percentRate(rate) {
  //   let sum = 0;
  //   reviews.forEach((review) => {
  //     if (review.rating === rate) {
  //       sum += 1;
  //     }
  //   });
  //   return `${Math.round((sum / reviews.length) * 100 * 10) / 10}%`;
  // }

  const ratingObj = {
    '5 stars': `${(Number(ratings['5']) / numReviews) * 100}%`,
    '4 stars': `${(Number(ratings['4']) / numReviews) * 100}%`,
    '3 stars': `${(Number(ratings['3']) / numReviews) * 100}%`,
    '2 stars': `${(Number(ratings['2']) / numReviews) * 100}%`,
    '1 stars': `${(Number(ratings['1']) / numReviews) * 100}%`,
  };

  return (
    <div className="rating container">
      <h1>{averageRating}</h1>
      <Star rating={averageRating} />
      <p>{`${percentRecommend * 100}% of reviews recommend this product`}</p>
      <div className="bars container">
        {[...Array(5)].map((element, index) => {
          const key = `${5 - index} stars`;
          return (<Bar percentage={ratingObj[key]} starName={key} key={key} />);
        })}
      </div>
    </div>
  );
}

export default RatingBD;
