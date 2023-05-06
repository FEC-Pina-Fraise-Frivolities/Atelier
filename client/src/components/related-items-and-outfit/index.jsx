import React from 'react';
import OutfitList from './components/OutfitList';
import RelatedList from './components/RelatedList';

function RelatedAndOutfit(productId, setProductId) {
  // let productId = 40346;
  // const [productId, setProductId] = useState(40346);

  return (
    <div>
      <p>
        related list of
        {productId}
      </p>
      <RelatedList productId={productId} setProductId={setProductId} />
      <p> ++++++++</p>
      <p>outfit list</p>
      <OutfitList
        productId={productId}
        setProductId={setProductId}
      />

    </div>
  );
}
export default RelatedAndOutfit;
