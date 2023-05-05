import { React, useEffect, useState } from 'react';
import RatingAndReview from './components/ratings-and-reviews/index.jsx';
import Overview from './components/overview/Overview';
import RelatedAndOutfit from './components/related-items-and-outfit/index.jsx';

const App = ()=> {
  const [ productId, setProductId ] = useState(40346);

  console.log('current id in app', productId);

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

import { React, useEffect, useState } from 'react';
import { ReactDom, render } from 'react-dom';
