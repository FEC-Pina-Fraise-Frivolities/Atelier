import IndividualTile from './IndividualTile.jsx';

const ReviewList = function ({reviews}) {

  return (
    <div className="list container">
      {reviews.map((review) => (
        <IndividualTile review={review} key={review.review_id}/>
      ))}
    </div>
  )
}

export default ReviewList;