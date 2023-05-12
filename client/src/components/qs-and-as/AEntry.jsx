import { React, useEffect, useState } from 'react';

const AEntry = (props) => {
  const [showPicture, setShowPicture] = useState(false);
  const [picture, setPicture] = useState('');

  const dateParse = (date) => {
    let d = new Date(date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return d.toLocaleDateString('en-us', options)
  }

  const pictureModal = (e) => {
    setPicture(e)
    setShowPicture(true)
    return
  }

  return (
    <div className="answer">
      <div> A: {props.answer.body}</div>
      <div className="aPicture"> {props.answer.photos.map((pic, i) => <img src={pic} key={i} width="70" height="50" onClick={(e) => pictureModal(pic)}></img>)}</div>
      {showPicture ? <div className="Modal">
        <img className="modalContent" src={picture} onClick={() => setShowPicture(false)}></img>
      </div> : null}
      <div className="aFoot">
        <div> by {props.answer.answerer_name === "Seller" ? <b>props.answer.answerer_name</b> : props.answer.answerer_name}, {dateParse(props.answer.date)} | </div>
        <div> Helpful? <u>Yes</u> &#40;{props.answer.helpfulness}&#41; | </div>
        <div> Report</div>
      </div>
    </div>
  )

};

export default AEntry