import { React, useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const RelatedList = ({ productId, setProductId }) => {
  console.log('current id in list', productId);
  const [relateArr, setRelatedArr] = useState([]);
  console.log('storage', window.localStorage);
  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}/related`)
      .then((res) => res.json())
      .then((result) => {
        console.log('array', result);
        setRelatedArr(result);
      })
      .catch((err) => console.log('get related list failed', err));
  }, [productId]);
  const ifRelated = true;
  return (
    relateArr.map((id, index) => (
      <ProductCard
        id={id}
        key={index}
        setProductId={setProductId}
        ifRelated={ifRelated}
      />
    ))
  );
};

export default RelatedList;
