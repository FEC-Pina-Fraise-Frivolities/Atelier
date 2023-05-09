import React from 'react';
import Star from './Star';
import Bar from './Bar';

function RatingBD({ reviews }) {
  const sumRating = reviews.reduce((accumulator, current) => (accumulator + current.rating), 0);
  const averageRating = Math.round((sumRating / reviews.length) * 10) / 10;

  const recommendNumber = reviews.reduce((accumulator, current) => (
    accumulator + Number(current.recommend)), 0);
  const percentRecommend = Math.round((recommendNumber / reviews.length) * 10) / 10;

  function percentRate(rate) {
    let sum = 0;
    reviews.forEach((review) => {
      if (review.rating === rate) {
        sum += 1;
      }
    });
    return `${Math.round((sum / reviews.length) * 100 * 10) / 10}%`;
  }

  const ratingObj = {
    '5 stars': percentRate(5),
    '4 stars': percentRate(4),
    '3 stars': percentRate(3),
    '2 stars': percentRate(2),
    '1 stars': percentRate(1),
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
