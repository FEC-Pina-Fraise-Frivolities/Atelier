import { React, useState } from 'react';
import RelatedList from './components/RelatedList';
import OutfitList from './components/OutfitList';

function RelatedAndOutfit({ productId, setProductId }) {
  const [storeArr, setStoreArr] = useState({});
  return (
    <div className="relatedmodule">
      <p className="sub-title" id="relatedTitle">
        Related Items
      </p>

      <RelatedList
        productId={productId}
        setProductId={setProductId}
        storeArr={storeArr}
        setStoreArr={setStoreArr}
      />
      <p className="sub-title">
        Your Outfit
      </p>
      <OutfitList
        className="listAndArrow"
        productId={productId}
        setProductId={setProductId}
        storeArr={storeArr}
        setStoreArr={setStoreArr}
      />
    </div>
  );
}
export default RelatedAndOutfit;
