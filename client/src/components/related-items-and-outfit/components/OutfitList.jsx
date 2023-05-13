import { React, useState } from 'react';
import ProductCard from './ProductCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function OutfitList({
  productId, setProductId, outfitIndex, setOutfitIndex,
}) {
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

  const OutfitAlready = ({ index }) => {
    console.log(outfitIndex);
    let renderIndex = outfitIndex;
    if (outfitIndex !== 0) {
      renderIndex -= 1;
    }
    const renderArr = outfitArr.slice(renderIndex, index + renderIndex);
    console.log('render', renderArr);
    return (
      renderArr.map((id) => (
        <li key={id} className="card">
          <ProductCard
            id={id}
            setProductId={setProductId}
            ifRelated={ifRelated}
            setOutfitArr={setOutfitArr}
          />
        </li>
      ))
    );
  };
  console.log(outfitArr);
  return (
    <div className="listAndArrow">
      {outfitIndex > 0 && <LeftArrow index={outfitIndex} setIndex={setOutfitIndex} />}
      {outfitIndex === 0
        && (
        <ul className="list" id="outfit_list">
          <li className="card" onClick={handleAdd}>
            <img src={require('../assets/addToOutfit.jpg')} alt="addttoOutfit" />
          </li>
          <OutfitAlready index={3} />
        </ul>
        )}
      {outfitIndex > 0
      && (
      <ul className="list" id="outfit_list">
        <OutfitAlready index={4} />
      </ul>
      )}

      {(outfitIndex === 0 && outfitArr.length > 3)
       && <RightArrow index={outfitIndex} setIndex={setOutfitIndex} />}

      {(outfitIndex > 0 && outfitIndex + 4 <= outfitArr.length)
       && <RightArrow index={outfitIndex} setIndex={setOutfitIndex} />}

    </div>
  );
}

export default OutfitList;
