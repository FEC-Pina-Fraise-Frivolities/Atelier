import { React, useEffect, useState } from 'react';
import AEntry from './AEntry';
import AddAnswer from './AddAnswer'

const QEntry = (props) => {
  let sortedAnswers = Object.values(props.question.answers).sort((a,b) => {return a.helpfulness - b.helpfulness})
  //Add Sort again by seller?  HOw to identify seller?
  const [ answers, setAnswers ] = useState(sortedAnswers);
  const [ aSlice, setASlice ] = useState(2);
  const [ showAddAnswer, setShowAddAnswer ] = useState(false);

const helpfulQuestion = () => {
  //Axios PUT Mark question was help
}

return (
<div className="qEntry">
<div className="qContainer">
  <div className="qLetter"> Q: </div>
  <div className="qLine">{props.question.question_body}</div>
  <div className="qHelp"> Helpful? |</div><div className="qYes" onClick={()=>{helpfulQuestion()}}><u>Yes</u> &#40;{props.question.question_helpfulness}&#41;</div>
  <div onClick={()=> setShowAddAnswer(true)}> Add an answer</div>
  {showAddAnswer ? <AddAnswer show={setShowAddAnswer} q={props.question}/>: null}
</div>
<div className="aContainer"> {answers.slice(0, aSlice).map((a, i) => {return <AEntry key={i} answer={a}/>})} </div>
{aSlice < answers.length ? <div onClick={() =>{setASlice(aSlice+2)}}> Load More Answers</div> : null}
</div>

)

};

export default QEntry