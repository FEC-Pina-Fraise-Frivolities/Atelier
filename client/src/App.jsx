import { React, useState } from 'react';
import Overview from './components/overview/Overview';
import QAIndex from './components/qs-and-as/index';
import RatingAndReview from './components/ratings-and-reviews/index';
import RelatedAndOutfit from './components/related-items-and-outfit/index';

function App() {
  const [productId, setProductId] = useState(40364);

  return (
    <div>
      <Overview productId={productId} setProductId={setProductId} />
      <RelatedAndOutfit productId={productId} setProductId={setProductId} />
      <QAIndex productId={productId} />
      <RatingAndReview productId={productId} />
    </div>
  );
}

export default App;
