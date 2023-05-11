import axios from 'axios';
import { React, useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function RelatedList({ productId, setProductId }) {
  const ifRelated = true;
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
    relateArr.map((id) => (
      <li className="card" key={id}>
        <ProductCard
          id={id}
          productId={productId}
          setProductId={setProductId}
          ifRelated={ifRelated}
        />
      </li>
    )));
}

export default RelatedList;
