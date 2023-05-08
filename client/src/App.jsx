import { React, useState } from 'react';
import Overview from './components/overview/Overview';

function App() {
  const [productId, setProductId] = useState(40346);

  console.log('current id in app', productId);

  return (
    <div>
      <Overview productId={productId} setProductId={setProductId} />
    </div>
  );
}

export default App;
