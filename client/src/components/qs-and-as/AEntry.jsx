import { React, useState } from 'react';
import axios from 'axios';

function AEntry({ answer }) {
  const [showPicture, setShowPicture] = useState(false);
  const [picture, setPicture] = useState('');
  const [reported, setReported] = useState(false);

  const dateParse = (date) => {
    const d = new Date(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return d.toLocaleDateString('en-us', options);
  };

  const pictureModal = (pic) => {
    setPicture(pic);
    setShowPicture(true);
  };

  const helpfulAnswer = () => {
    axios.put('/qa/answers/:answer_id/helpful', { answer_id: answer.id })
      .then(console.log('Answer marked helpful'))
      .catch((err) => console.log(err));
  };

  const reportAnswer = () => {
    axios.put('/qa/answers/:answer_id/report', { answer_id: answer.id })
      .then(setReported(true))
      .catch((e) => console.log(e));
  };

  return (
    <div className="answer">

      <div className="aLine">
        <div className="qaLetter">A: </div>
        <div className="qaText">{answer.body}</div>
      </div>
      <div className="aPictureContainer">
        {answer.photos.map((pic) => <img className="aPicture" alt="" src={pic} key={pic} width="70" height="50" onClick={() => pictureModal(pic)} />)}
      </div>
      {showPicture ? (
        <div className="qaModal">
          <img className="qaModalContent" alt="" src={picture} onClick={() => { setShowPicture(false); }} />
        </div>
      ) : null}
      <div className="aFoot">
        <div>
          by&nbsp;
          {answer.answerer_name === 'Seller' ? <b>answer.answerer_name</b> : answer.answerer_name}
          ,&nbsp;
          {dateParse(answer.date)}
        </div>
        <div>
           &nbsp;Helpful?&nbsp;
          <span className="qaYes qaPoint" onClick={helpfulAnswer}>
            Yes
            &#40;
            {answer.helpfulness}
            &#41;
          </span>
        </div>
        {reported ? <div>&nbsp;|&nbsp; Reported</div> : <div className="qaPoint qaReport" onClick={reportAnswer}>&nbsp;|&nbsp;Report</div>}
      </div>
    </div>
  );
}

export default AEntry;
