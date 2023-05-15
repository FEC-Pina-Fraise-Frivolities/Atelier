import { React, useEffect, useState } from 'react';
import AEntry from './AEntry';
import AddAnswer from './AddAnswer';
import axios from 'axios';

const QEntry = (props) => {
  let sortedAnswers = Object.values(props.question.answers).sort((a,b) => {return b.helpfulness - a.helpfulness})
  //Add Sort again by seller?  HOw to identify seller?
  const [ answers, setAnswers ] = useState(sortedAnswers);
  const [ aSlice, setASlice ] = useState(1);
  const [ showAddAnswer, setShowAddAnswer ] = useState(false);

const helpfulQuestion = () => {
  axios.put('/qa/questions/:question_id/helpful', {question_id: props.question.question_id})
}

return (
<div className="qEntry">
<div className="qContainer">
  <div className="qaLetter">Q:</div>
  <div className="qaText">{props.question.question_body}</div>
  <div className="qHelp"> Helpful? |</div><div><span className="qaYes qaPoint" onClick={()=>{helpfulQuestion()}}><u>Yes</u></span> &#40;{props.question.question_helpfulness}&#41;</div>
  <div className="addAnswer qaPoint" onClick={()=> setShowAddAnswer(true)}> Add an answer</div>
  {showAddAnswer ? <AddAnswer show={setShowAddAnswer} q={props.question}/>: null}
</div>
<div className="aContainer"> {answers.slice(0, aSlice).map((a, i) => {return <AEntry key={i} answer={a}/>})} </div>
{aSlice < answers.length ? <div className="qaMoreAnswer qaPoint" onClick={() =>{setASlice(aSlice+2)}}>&or;Show More Answers&or; &#40;{answers.length - aSlice}&#41;</div> : null}
{aSlice > 2 ? <div className="qaMoreAnswer qaPoint" onClick={() =>{setASlice(2)}}>&and;Collapse Answers&and;</div> : null}
</div>
)

};

export default QEntry