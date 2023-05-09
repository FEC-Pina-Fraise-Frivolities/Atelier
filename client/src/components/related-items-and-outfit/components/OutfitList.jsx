import { React, useState } from 'react';
import ProductCard from './ProductCard';

function OutfitList({ productId, setProductId }) {
  const ifRelated = false;
  const ifOutfit = window.localStorage.getItem('outfitArr') !== ''
            && window.localStorage.getItem('outfitArr') !== null
            && JSON.parse(window.localStorage.getItem('outfitArr')) !== [];
  let outfit = ifOutfit ? JSON.parse(window.localStorage.getItem('outfitArr')) : [];
  const [outfitArr, setOutfitArr] = useState(outfit);

  const handleAdd = () => {
    outfit = outfitArr.slice();
    // can use set
    if (outfit.indexOf(productId) < 0) {
      outfit.unshift(productId);
      setOutfitArr(outfit);
    }
    window.localStorage.setItem('outfitArr', JSON.stringify(outfit));
  };

  const OutfitAlready = () => (
    outfitArr.map((id) => (
      <li className="card" key={id}>
        <ProductCard
          id={id}
          setProductId={setProductId}
          ifRelated={ifRelated}
          setOutfitArr={setOutfitArr}
        />
      </li>
    ))
  );
  return (
    <ul className="list" id="outfit_list">
      <li className="card" onClick={handleAdd}>add to outfit</li>
      <OutfitAlready />
    </ul>

  );
}

export default OutfitList;
