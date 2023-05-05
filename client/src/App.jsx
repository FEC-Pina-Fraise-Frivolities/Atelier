import { React, useState, useEffect } from 'react';
import RatingAndReview from './components/ratings-and-reviews/index.jsx';



const App = () => {
    const [productId, setProductId] = useState('');

    return  (

      <>
        <div className="rating-and-review">
          <RatingAndReview />
        </div>
      </>
    );

};

export default App;