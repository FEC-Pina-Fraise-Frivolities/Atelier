import { React, useEffect, useState } from 'react';

const AEntry = () => {
  const [ answer, setQuestion] = useState('It is totally safe');
  const [ user, setUser] = useState('Karen');
  const [ answerDate, setAnswerDate] = useSate('')

  const dateParse = (date) => {
    let d = new Date (date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return d.toLocaleDateString('en-us', options)
  }


return (
<div>
<div> A: {answer}.</div>
<div> user: {user}, date: {dateParse(answerDate)}</div>
<div> helpful? </div>
<div> report</div>
</div>

)

};

export default AEntry