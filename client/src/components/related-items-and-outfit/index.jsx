import React from 'react';
import OutfitList from './components/OutfitList';
import RelatedList from './components/RelatedList';

function RelatedAndOutfit({ productId, setProductId }) {
  const leftArrow = '<';
  const rightArrow = '>';
  return (
    <div>
      <p className="sub-title" id="relatedTitle">
        related list of
        {productId}
      </p>
      <span className="listAndArrow">
        <button>{leftArrow}</button>
        <ul className="list" id="related"><RelatedList productId={productId} setProductId={setProductId} /></ul>
        <button>{rightArrow}</button>
      </span>

      <p> ++++++++</p>

      <p className="sub-title" id="outfitTitle">outfit list</p>
      <span className="listAndArrow">
        <button>{leftArrow}</button>
        <OutfitList
          productId={productId}
          setProductId={setProductId}
        />
        <button>{rightArrow}</button>
      </span>
    </div>
  );
}
export default RelatedAndOutfit;
