import { React, useEffect, useState } from 'react';
import { ReactDom, render } from 'react-dom';
import Overview from './components/overview/Overview';

function App() {
  const { productId, setProductId } = useState('');
  const { outfitArr, setOutfitArr } = useState([]);

  return (
    <Overview />
  );
}

export default App;
