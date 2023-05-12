import { React, useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function RelatedListHelper({
  productId, setProductId, relateArr, relateIndex,
}) {
  const ifRelated = true;
  const renderArr = relateArr.slice(relateIndex, relateIndex + 4);
  return (
    renderArr.map((id) => (
      <li key={id}>
        <ProductCard
          id={id}
          productId={productId}
          setProductId={setProductId}
          ifRelated={ifRelated}
        />
      </li>
    )));
}

function RelatedList({
  productId, setProductId, relateIndex, setRelateIndex,
}) {
  const [relateArr, setRelatedArr] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3000/products/${productId}/related`)
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
        />
      </ul>
      { relateIndex + 4 < relateArr.length
      && <RightArrow index={relateIndex} setIndex={setRelateIndex} />}
    </div>
  );
}
export default RelatedList;
