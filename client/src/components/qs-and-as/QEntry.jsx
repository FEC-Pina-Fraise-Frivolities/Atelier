import { React, useEffect, useState } from 'react';
import AEntry from './AEntry.jsx'

const QEntry = (props) => {
  let sortedAnswers = Object.values(props.question.answers).sort((a,b) => {return a.helpfulness - b.helpfulness})
  const [ answers, setAnswers ] = useState(sortedAnswers);
  const [ aSlice, setASlice ] = useState(2);

const helpfulQuestion = () => {
  //Axios PUT Mark question was help
}

return (
<div>
<div className="qLetter"> Q: </div>
<div className="qLine">{props.question.question_body}</div>
<div> Helpful?</div><div className="qYes" onClick={()=>{helpfulQuestion()}}><u>Yes</u> &#40;{props.question.question_helpfulness}&#41;</div>
<div> Add an answer</div>
<div> {answers.slice(0, aSlice).map((a, i) => {return <AEntry key={i} answer={a}/>})} </div>
{aSlice < answers.length ? <div onClick={() =>{setASlice(aSlice+2)}}> Load More Answers</div> : null}
</div>

)

};

export default QEntry