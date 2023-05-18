import { React, useState } from 'react';
import ComparisonView from './ComparisonView';

function StarButton({ productId, nextId }) {
  const [compare, setCompare] = useState(false);

  const handleClick = () => {
    setCompare(!compare);
  };
  return (
    <div>
      <button
        className="relatedbutton"
        id="starButton"
        type="button"
        onClick={() => { handleClick(); }}
      >
        &#9733;
      </button>
      {compare && <ComparisonView productId={productId} nextId={nextId} setCompare={setCompare} />}
    </div>
  );
}
export default StarButton;
