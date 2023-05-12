import { React, useState } from 'react';
import RelatedList from './components/RelatedList';
import OutfitList from './components/OutfitList';

function RelatedAndOutfit({ productId, setProductId }) {
  const [relateIndex, setRelateIndex] = useState(0);
  const [outfitIndex, setOutfitIndex] = useState(0);

  return (
    <div className="relatedmodule">
      <p className="sub-title" id="relatedTitle">
        related list of
        {productId}
      </p>

      <RelatedList
        productId={productId}
        setProductId={setProductId}
        relateIndex={relateIndex}
        setRelateIndex={setRelateIndex}
      />

      <p> ++++++++</p>

      <p className="sub-title" id="outfitTitle">outfit list</p>

      <OutfitList
        className="listAndArrow"
        productId={productId}
        setProductId={setProductId}
        outfitIndex={outfitIndex}
        setOutfitIndex={setOutfitIndex}
      />
    </div>
  );
}
export default RelatedAndOutfit;
