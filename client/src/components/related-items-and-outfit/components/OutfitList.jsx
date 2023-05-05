import { React, useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
const AddToOutfitCard = () => {

};



const OutfitList = (props) => {
  let ifRelated = false;
  let ifOutfit = window.localStorage.getItem('outfitArr') !== '' ? true : false;

  const handleAdd = () => {
    if (window.localStorage.getItem('outfitArr') !== '') {
      let arr = JSON.parse(window.localStorage.getItem('outfitArr'));
      // refactor idea: use set
      if (arr.indexOf(props.productId) < 0) { arr.push(props.productId); }
      console.log(arr);
      window.localStorage.setItem('outfitArr', JSON.stringify(arr));

    } else {
      let arr = [props.productId];
      window.localStorage.setItem('outfitArr', JSON.stringify(arr));
    }
    console.log(window.localStorage);
  };

  console.log(ifOutfit);

  const OutfitAlready = () => {
    let arr = JSON.parse(window.localStorage.getItem('outfitArr'));
    return (
      arr.map((id, index) => {
        return <ProductCard id = {id} key = {index} setProductId = {props.setProductId} ifRelated = {ifRelated}/>;
      })
    );
  };
  // refactor idea: useState to renew the renderOutfit
  return (
    <div>
      <button onClick = {handleAdd}> add </button>
      {ifOutfit && <OutfitAlready />}
    </div>
  );


};

export default OutfitList;


