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
  productId, setProductId, storeArr, setStoreArr,
}) {
  const [relateArr, setRelatedArr] = useState([]);
  const [relateIndex, setRelateIndex] = useState(0);
  useEffect(() => {
    setRelateIndex(0);
    axios.get(`/products/${productId}/related`)
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
      <h2 className="sub-title" id="relatedTitle">
        RELATED ITEMS
      </h2>

      { relateIndex > 0 && (
      <div className="listButton">
        <LeftArrow index={relateIndex} setIndex={setRelateIndex} />
      </div>
      )}
      <ul className="list">
        {relateArr.length === 0 && (
        <li className="card">
          <span className="addCard">
            <strong>No Related Items</strong>
          </span>
        </li>
        )}
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
      && (
      <div className="listButton">
        <RightArrow index={relateIndex} setIndex={setRelateIndex} />
      </div>
      )}
    </div>
  );
}
export default RelatedList;
