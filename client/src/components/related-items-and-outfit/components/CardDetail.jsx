import { React, useState } from 'react';
import Star from '../../ratings-and-reviews/Star';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

function PhotoGallery({
  photoArr, setShow, setImgIndex,
}) {
  return (
    photoArr.map((url, index) => {
      if (url === null) {
        url = require('../assets/Image_not_available.jpg');
      }
      return (
        <li key={url + index} className="thumphoto">
          <img
            src={url}
            onError={(e) => { e.target.src = require('../assets/Image_not_available.jpg'); }}
            alt="header"
            width="40"
            height="40"
            onClick={() => {
              setImgIndex(index);
            }}
            onMouseEnter={() => { setShow(true); }}
            onMouseLeave={() => setShow(false)}
          />
        </li>
      );
    })
  );
}

function CardDetail({
  ratings, name, originalPrice, salePrice, category,
  photoArr, setProductId, id, setStoreArr, storeArr,
}) {
  const [show, setShow] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const obj = {};
  obj.ratings = ratings;
  obj.name = name;
  obj.originalPrice = originalPrice;
  obj.salePrice = salePrice;
  obj.category = category;
  obj.photos = photoArr;
  const store = storeArr;
  store[id.toString()] = obj;
  setStoreArr(store);
  const handleClick = () => {
    setProductId(id);
  };
  if (photoArr[0] === null) {
    photoArr[0] = require('../assets/Image_not_available.jpg');
  }
  const rating = Math.round((ratings) * 10) / 10;
  const ifSale = salePrice !== null;
  return (
    <div>
      {/* <div className="mainImgBox">
        <div className="imgbuttton"><LeftArrow /></div> */}
      <div className="mainImgBox">
        <div className="imgleftbuttton">
          {imgIndex !== 0 && (
          <LeftArrow
            index={imgIndex}
            setIndex={setImgIndex}
          />
          )}
        </div>
        <img
          className="mainImg"
          src={photoArr[imgIndex]}
          onError={(e) => { e.target.src = require('../assets/Image_not_available.jpg'); }}
          alt="header"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        />
        <div className="imgrightbuttton">
          {imgIndex < photoArr.length - 1 && (
          <RightArrow
            index={imgIndex}
            setIndex={setImgIndex}
          />
          )}
        </div>
      </div>

      {show
      && (
      <ul className="list-gallery">
        <PhotoGallery
          setShow={setShow}
          photoArr={photoArr}
          setImgIndex={setImgIndex}
        />
      </ul>
      )}
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
export default CardDetail;
