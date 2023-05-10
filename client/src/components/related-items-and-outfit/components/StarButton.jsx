import { React, useState } from 'react';
import ComparisonView from './ComparisonView';

function StarButton({ productId, nextId }) {
  const [compare, setCompare] = useState(false);

  const handleClick = () => {
    setCompare(!compare);
  };
  return (
    <div>
      <button className="relatedbutton" type="button" onClick={() => { handleClick(); }}>⭐️</button>
      {compare && <ComparisonView productId={productId} nextId={nextId} />}
    </div>
  );
}
export default StarButton;
