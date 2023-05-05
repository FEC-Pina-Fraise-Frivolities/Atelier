import { React, useState, useEffect } from 'react';
import { TOKEN } from '../assets/config.js';
import ProductCard from './ProductCard.jsx';
const RelatedList = ({productId, setProductId}) => {
  console.log('current id in list', productId);
  const [relateArr, setRelatedArr] = useState([]);
  console.log('storage', window.localStorage);
  useEffect(() => {
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${productId}/related`,
      {
        headers: {
          'Authorization': TOKEN
        }
      })
      // res.json(): promise type
      // get the array as result
      .then(res => { return res.json(); })
      .then((result) => {
        console.log(result);
        setRelatedArr(result);

      })
      .catch(err => console.log('get related list failed', err));
  }, [productId]);
  let ifRelated = true;
  return (
    relateArr.map((id, index) => {
      return <ProductCard id = {id} key = {index} setProductId = {setProductId} ifRelated = {ifRelated}/>;
    })
  );


};

export default RelatedList;