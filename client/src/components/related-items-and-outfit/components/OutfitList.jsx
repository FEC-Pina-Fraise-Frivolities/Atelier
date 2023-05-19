import { React, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import CardDetail from './CardDetail';
import DeleteButton from './DeleteButton';

function OutfitList({
  productId, setProductId, setStoreArr, storeArr,
}) {
  const ifRelated = false;
  const ifOutfit = window.localStorage.getItem('outfitArr') !== ''
            && window.localStorage.getItem('outfitArr') !== null
            && JSON.parse(window.localStorage.getItem('outfitArr')) !== [];
  let outfit = ifOutfit ? JSON.parse(window.localStorage.getItem('outfitArr')) : [];
  const [outfitArr, setOutfitArr] = useState(outfit);
  const [outfitIndex, setOutfitIndex] = useState(0);
  useEffect(() => {
    setOutfitIndex(0);
  }, [productId]);
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
    let renderIndex = outfitIndex;
    if (outfitIndex !== 0) {
      renderIndex -= 1;
    }
    const renderArr = outfitArr.slice(renderIndex, index + renderIndex);
    return (
      renderArr.map((id) => {
        const ifNotStored = storeArr[id.toString()] === undefined;
        return (
          <li key={id} className="card">
            {ifNotStored && (
            <ProductCard
              id={id}
              productId={productId}
              setProductId={setProductId}
              ifRelated={ifRelated}
              setStoreArr={setStoreArr}
              storeArr={storeArr}
            />
            )}
            {!ifNotStored && (
            <CardDetail
              ratings={storeArr[id.toString()].ratings}
              name={storeArr[id.toString()].name}
              originalPrice={storeArr[id.toString()].originalPrice}
              salePrice={storeArr[id.toString()].salePrice}
              category={storeArr[id.toString()].category}
              photoArr={storeArr[id.toString()].photos}
              setProductId={setProductId}
              id={id}
              setStoreArr={setStoreArr}
              storeArr={storeArr}
            />
            )}
            <DeleteButton deleteId={id} setOutfitArr={setOutfitArr} />
          </li>
        );
      })
    );
  };
  return (
    <div className="listAndArrow">
      <h2 className="sub-title">
        YOUR OUTFIT
      </h2>
      {outfitIndex > 0 && (
      <div className="listButton">
        {' '}
        <LeftArrow index={outfitIndex} setIndex={setOutfitIndex} />
        {' '}
      </div>
      )}
      {outfitIndex === 0
        && (
        <ul className="list" id="outfit_list">
          <li className="card" onClick={handleAdd}>
            <span className="addCard">
              <strong>Add to Your Outfit</strong>
            </span>
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
       && (
       <div className="listButton">
         {' '}
         <RightArrow index={outfitIndex} setIndex={setOutfitIndex} />
         {' '}
       </div>
       )}

      {(outfitIndex > 0 && outfitIndex + 4 <= outfitArr.length)
       && (
       <div className="listButton">
         {' '}
         <RightArrow index={outfitIndex} setIndex={setOutfitIndex} />
       </div>
       )}

    </div>
  );
}

export default OutfitList;
