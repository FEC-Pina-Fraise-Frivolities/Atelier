import { React, useEffect, useState } from 'react';
import RatingAndReview from './components/ratings-and-reviews/index';
import Overview from './components/overview/Overview';
import RelatedAndOutfit from './components/related-items-and-outfit/index';

function App() {
  const [productId, setProductId] = useState('40306');

  return (
    <>
      <RatingAndReview />
    </>
  );
}

export default App;
