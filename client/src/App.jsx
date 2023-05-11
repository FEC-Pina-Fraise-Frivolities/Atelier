import { React, useEffect, useState } from 'react';
import RatingAndReview from './components/ratings-and-reviews/index';
import Overview from './components/overview/Overview';
import RelatedAndOutfit from './components/related-items-and-outfit/index.jsx';
import QAIndex from './components/qs-and-as/index.jsx'

function App() {
  const [productId, setProductId] = useState(40436);

  console.log('current id in app', productId);

  return (
    <div>
        <Overview />
      <div>Item-detail  {productId}</div>
      <p>...</p>
      <p>...</p>
      {/* <div><RelatedAndOutfit productId ={productId} setProductId = {setProductId}/></div> */}
      <p>...</p>
      <p>...</p>
      <div><QAIndex /></div>
      <div>review  {productId}</div>
    </div>
  );
}

export default App;