import { React, useState, useEffect } from 'react';
import CardDetail from './CardDetail';

function ProductCard({
  id, setProductId, setStoreArr, storeArr,
}) {
  const [ratings, setRatings] = useState(NaN);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [originalPrice, setOiginalPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(null);
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`/reviews/meta?product_id=${id}`)
      .then((res) => res.json())
      .then((result) => {
        // find the rate
        let count = 0;
        let total = 0;
        for (const num in result.ratings) {
          total += parseInt(result.ratings[num]) * parseInt(num);
          count += parseInt(result.ratings[num]);
        }
        setRatings((total / count).toFixed(2));
      })
      .then(
        fetch(`/products/${id}/styles`)
          .then((res) => res.json())
          .then((result) => {
            setOiginalPrice(result.results[0].original_price);
            setSalePrice(result.results[0].sale_price);
            const photoArr = [];
            result.results.forEach((obj) => {
              if (obj.thumbnail_url !== null && photoArr.length < 4) {
                photoArr.push(obj.photos[0].thumbnail_url);
              }
            });
            setPhotos(photoArr);
          })
          .catch((err) => console.log('get styles failed', err)),
      )
      .then(
        fetch(`/products/${id}`)
          .then((res) => res.json())
          .then((result) => {
            setCategory(result.category);
            setName(result.name);
          })
          .catch((err) => { console.log('get id failed', err); }),
      )
      .catch((err) => console.log('get ratings', err));
  }, [id]);

  return (
    <CardDetail
      ratings={ratings}
      name={name}
      originalPrice={originalPrice}
      salePrice={salePrice}
      category={category}
      photoArr={photos}
      setProductId={setProductId}
      id={id}
      setStoreArr={setStoreArr}
      storeArr={storeArr}
    />
  );
}
export default ProductCard;
