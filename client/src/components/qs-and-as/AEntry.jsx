import { React, useEffect, useState } from 'react';

const AEntry = (props) => {
  const dateParse = (date) => {
    let d = new Date (date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return d.toLocaleDateString('en-us', options)
  }

// console.log(props.answer)
return (
<div className="answer">
<div> A: {props.answer.body}.</div>
<div className="aFoot">
<div> by {props.answer.answerer_name === "Seller" ? <b>props.answer.answerer_name</b> : props.answer.answerer_name}, {dateParse(props.answer.date)} | </div>
<div> Helpful? <u>Yes</u> &#40;{props.answer.helpfulness}&#41; | </div>
<div> Report</div>
</div>
</div>

)

};

export default AEntry