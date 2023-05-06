import { React, useEffect, useState } from 'react';
import { ReactDom, render } from 'react-dom';
import Overview from './components/overview/Overview';
import RelatedAndOutfit from './components/related-items-and-outfit/index.jsx';

function App() {
  const [productId, setProductId] = useState(40346);

  console.log('current id in app', productId);

  return (
    <div>
      <Overview />
      <div>
        Item-detail
        {productId}
      </div>
      <p>...</p>
      <p>...</p>
      <div><RelatedAndOutfit productId={productId} setProductId={setProductId} /></div>
      <p>...</p>
      <p>...</p>
      <div>
        q and a
        {productId}
      </div>
      <div>
        review
        {productId}
      </div>
    </div>
  );
}

export default App;
