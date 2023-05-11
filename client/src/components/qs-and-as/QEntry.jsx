import { React, useEffect, useState } from 'react';
import AEntry from './AEntry.jsx'

const QEntry = (props) => {
  let sortedAnswers = Object.values(props.question.answers).sort((a,b) => {return a.helpfulness - b.helpfulness})
  const [ answers, setAnswers ] = useState(sortedAnswers);
  const [ aSlice, setASlice ] = useState(2);

  const dateParse = (date) => {
    let d = new Date (date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return d.toLocaleDateString('en-us', options)
  }


return (
<div>
<div> Q: {props.question.question_body}</div>
<div> by: {props.question.asker_name}, {dateParse(props.question.question_date)}  | Helpfulness: {props.question.question_helpfulness}</div>
<div> {answers.slice(0, aSlice).map((a) => {return <AEntry answer={a}/>})} </div>
<div onClick={() =>{setASlice(aSlice+2)}}> Load More Answers</div>
</div>

)

};

export default QEntry