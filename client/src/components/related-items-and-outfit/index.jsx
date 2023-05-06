import { React, useState } from 'react';
import OutfitList from './components/OutfitList.jsx';
import RelatedList from './components/RelatedList.jsx';

const RelatedAndOutfit = (props) => {
  //let productId = 40346;
  //const [productId, setProductId] = useState(40346);

  somefunc = () => {
    blah
  }
  afasf


  return (
    <div>
      <p>related list of {props.productId}</p>
      <RelatedList productId = {props.productId} setProductId = {props.setProductId}/>
      <p> ++++++++</p>
      <p>outfit list</p>
      <OutfitList productId = {props.productId}
        setProductId = {props.setProductId}/>



    </div>);
};
export default RelatedAndOutfit;
