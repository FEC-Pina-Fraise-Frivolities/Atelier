import { React, useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import StarButton from './StarButton';
import CardDetail from './CardDetail';

function RelatedListHelper({
  productId, setProductId, relateArr, relateIndex, setStoreArr, storeArr,
}) {
  const renderArr = relateArr.slice(relateIndex, relateIndex + 4);
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
          <StarButton productId={productId} nextId={id} />
        </li>
      );
    }));
}

function RelatedList({
  productId, setProductId, relateIndex, setRelateIndex, storeArr, setStoreArr,
}) {
  const [relateArr, setRelatedArr] = useState([]);

  useEffect(() => {
    axios(`/products/${productId}/related`)
      .then((res) => res.data)
      .then((result) => {
        const arr = [];
        result.forEach((id) => {
          if (arr.indexOf(id) < 0 && id !== productId) {
            arr.push(id);
          }
        });
        setRelatedArr(arr);
      })
      .catch((err) => console.error('get related list failed', err));
  }, [productId]);
  return (
    <div className="listAndArrow">
      { relateIndex > 0 && <LeftArrow index={relateIndex} setIndex={setRelateIndex} />}
      <ul className="list">
        <RelatedListHelper
          productId={productId}
          setProductId={setProductId}
          relateArr={relateArr}
          relateIndex={relateIndex}
          setStoreArr={setStoreArr}
          storeArr={storeArr}
        />
      </ul>
      { relateIndex + 4 < relateArr.length
      && <RightArrow index={relateIndex} setIndex={setRelateIndex} />}
    </div>
  );
}
export default RelatedList;
