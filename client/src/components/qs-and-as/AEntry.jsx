import { React, useEffect, useState } from 'react';

const AEntry = (props) => {
  const dateParse = (date) => {
    let d = new Date (date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return d.toLocaleDateString('en-us', options)
  }


return (
<div>
<div> A: {props.answer.body}.</div>
<div> user: {props.answer.answerer_name}, {dateParse(props.answer.date)}</div>
<div> Helpful? &#40;{props.answer.helpfulness}&#41; </div>
<div> report</div>
</div>

)

};

export default AEntry