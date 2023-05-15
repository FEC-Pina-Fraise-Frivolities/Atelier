import { React, useEffect, useState } from 'react';
import axios from 'axios';

const AEntry = (props) => {
  const [showPicture, setShowPicture] = useState(false);
  const [picture, setPicture] = useState('');
  const [reported, setReported] = useState(false);

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

  const helpfulAnswer = () => {
    axios.put('/qa/answers/:answer_id/helpful', {answer_id: props.answer.id})
    .then((r) => console.log('Answer marked helpful'))
    .catch((e) => console.log(e));
  }

  const reportAnswer = () => {
    console.log('report triggered')
    axios.put('/qa/answers/:answer_id/report', {answer_id: props.answer.id})
    .then((r) => {console.log('Answer reported'); setReported(true)})
    .catch((e) => console.log(e));
  }

  return (
    <div className="answer">

      <div className="aLine">
      <div className="qaLetter">A: </div>
      <div className="qaText">{props.answer.body}</div>
      </div>

      <div className="aPictureContainer"> {props.answer.photos.map((pic, i) => <img className="aPicture" src={pic} key={i} width="70" height="50" onClick={(e) => pictureModal(pic)}></img>)}</div>
      {showPicture ? <div className="qaModal">
        <img className="qaModalContent" src={picture} onClick={() => setShowPicture(false)}></img>
      </div> : null}

      <div className="aFoot">
        <div> by {props.answer.answerer_name === "Seller" ? <b>props.answer.answerer_name</b> : props.answer.answerer_name}, {dateParse(props.answer.date)} | </div>
        <div> Helpful? <span className="qaYes qaPoint" onClick={helpfulAnswer}><u>Yes</u></span> &#40;{props.answer.helpfulness}&#41; | </div>
        {reported ? <div>Reported</div> : <div className="qaPoint" onClick={reportAnswer}>Report</div>}
      </div>

    </div>
  )

};

export default AEntry