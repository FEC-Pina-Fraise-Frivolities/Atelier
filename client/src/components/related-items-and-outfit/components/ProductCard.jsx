import { React, useState, useEffect } from 'react';
import Star from '../../ratings-and-reviews/Star';
import StarButton from './StarButton';
import DeleteButton from './DeleteButton';

function PhotoGallery({ photoArr, setPhotoUrl }) {
  return (
    photoArr.map((url) => (
      <li key={url}>
        <img
          className="thumphoto"
          src={url}
          onError={(e) => { e.target.src = require('../assets/Image_not_available.jpg'); }}
          alt="header image"
          width="40"
          height="40"
          onClick={() => {
            console.log('click');
            setPhotoUrl(url);
          }}
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
  const rating = Math.round((ratings) * 10) / 10;
  const ifSale = salePrice !== null;
  return (
    <div>
      <img
        className="mainImg"
        src={photoUrl}
        onError={(e) => { e.target.src = require('../assets/Image_not_available.jpg'); }}
        alt="header image"
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      />
      {show && <ul className="list-gallery"><PhotoGallery photoArr={photoArr} setPhotoUrl={setPhotoUrl} /></ul>}
      <p className="category">
        {category}
      </p>
      <p onClick={() => { handleClick(); }} className="name">
        {name}
      </p>

      {ifSale && (
      <span className="price">
        <p>
          <s>
            $
            {' '}
            {originalPrice}
          </s>
        </p>
        <p className="salesPrice">
          $
          {' '}
          {salePrice}
        </p>
      </span>
      )}
      {!ifSale && (
      <p className="price">
        $
        {' '}
        {originalPrice}
      </p>
      )}

      <span className="ratings">
        <p>
          ratings:
          {' '}
          {rating}
        </p>
        <Star rating={rating} />
      </span>

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
    <div className="card">
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
