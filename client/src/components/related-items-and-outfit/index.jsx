import { React, useState } from 'react';
import RelatedList from './components/RelatedList';
import OutfitList from './components/OutfitList';

function RelatedAndOutfit({ productId, setProductId }) {
  const [storeArr, setStoreArr] = useState({});
  return (
    <div className="relatedmodule">
      <RelatedList
        productId={productId}
        setProductId={setProductId}
        storeArr={storeArr}
        setStoreArr={setStoreArr}
      />
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
