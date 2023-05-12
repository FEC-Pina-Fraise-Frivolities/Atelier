import { React, useEffect, useState } from 'react';
import AEntry from './AEntry';
import AddAnswer from './AddAnswer';
import axios from 'axios';

const QEntry = (props) => {
  let sortedAnswers = Object.values(props.question.answers).sort((a,b) => {return b.helpfulness - a.helpfulness})
  //Add Sort again by seller?  HOw to identify seller?
  const [ answers, setAnswers ] = useState(sortedAnswers);
  const [ aSlice, setASlice ] = useState(2);
  const [ showAddAnswer, setShowAddAnswer ] = useState(false);

const helpfulQuestion = () => {
  axios.put('/qa/questions/:question_id/helpful', {question_id: props.question.question_id})
}

return (
<div className="qEntry">
<div className="qContainer">
  <div className="qLetter"> Q: </div>
  <div className="qLine">{props.question.question_body}</div>
  <div className="qHelp"> Helpful? |</div><div><span className="qYes" onClick={()=>{helpfulQuestion()}}><u>Yes</u></span> &#40;{props.question.question_helpfulness}&#41;</div>
  <div onClick={()=> setShowAddAnswer(true)}> Add an answer</div>
  {showAddAnswer ? <AddAnswer show={setShowAddAnswer} q={props.question}/>: null}
</div>
<div className="aContainer"> {answers.slice(0, aSlice).map((a, i) => {return <AEntry key={i} answer={a}/>})} </div>
{aSlice < answers.length ? <div onClick={() =>{setASlice(aSlice+2)}}> Load More Answers</div> : null}
</div>
)

};

export default QEntry