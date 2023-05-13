import { React, useState, useEffect } from 'react';
import RelatedList from './components/RelatedList';
import OutfitList from './components/OutfitList';

function RelatedAndOutfit({ productId, setProductId }) {
  const [relateIndex, setRelateIndex] = useState(0);
  const [outfitIndex, setOutfitIndex] = useState(0);
  useEffect(() => {
    setRelateIndex(0);
    setOutfitIndex(0);
  }, [productId]);

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
