import { React, useState, useEffect } from 'react';

import StarButton from './StarButton';
import DeleteButton from './DeleteButton';

function PhotoGallery({ photoArr, setPhotoUrl }) {
  return (
    photoArr.map((url) => (
      <li key={url}>
        <img
        className="thumphoto"
        src={url}
        alt="header image"
        width="30"
        height="30"
        onClick={() => { setPhotoUrl(url); }}

      />
      </li>

    ))
  );
}

function CardDetail({
  ratings, name, originalPrice, salePrice, category, mainUrl, photoArr, setProductId, id,
}) {
  const [show, setShow] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  useEffect(() => {
    setPhotoUrl(mainUrl);
  }, [mainUrl]);
  const handleClick = () => {
    setProductId(id);
  };
  const ifSale = salePrice !== null;
  return (
    <div>
      <img
        className="mainImg"
        src={photoUrl}
        alt="header image"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
      {show && <ul className="list-gallery"><PhotoGallery photoArr={photoArr} setPhotoUrl={setPhotoUrl} /></ul>}
      <p onClick={() => { handleClick(); }}>
        name:
        {' '}
        {name}
      </p>
      <p>
        ratings:
        {' '}
        {ratings}
      </p>

      <p>
        original_price:
        {' '}
        {originalPrice}
      </p>
      {ifSale && (
      <p>
        salePrice:
        {' '}
        {salePrice}
      </p>
      )}
      <p>
        category:
        {' '}
        {category}
      </p>
    </div>

  );
}

function ProductCard({
  id, productId, setProductId, ifRelated, setOutfitArr,
}) {
  const [ratings, setRatings] = useState(0);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [originalPrice, setOiginalPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [mainUrl, setMainUrl] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/reviews/meta?product_id=${id}`)
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
        fetch(`http://localhost:3000/products/${id}/styles`)
          .then((res) => res.json())
          .then((result) => {
            setOiginalPrice(result.results[0].original_price);
            setSalePrice(result.results[0].sale_price);
            setMainUrl(result.results[0].photos[0].thumbnail_url);
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
        fetch(`http://localhost:3000/products/${id}`)
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
    <div>
      <CardDetail
        ratings={ratings}
        name={name}
        originalPrice={originalPrice}
        salePrice={salePrice}
        category={category}
        mainUrl={mainUrl}
        photoArr={photos}
        setProductId={setProductId}
        id={id}
      />
      {ifRelated && <StarButton productId={productId} nextId={id} />}
      {!ifRelated && <DeleteButton deleteId={id} setOutfitArr={setOutfitArr} />}
    </div>
  );
}
export default ProductCard;
