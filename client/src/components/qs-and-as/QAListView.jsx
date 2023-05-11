import React from 'react';
import QEntry from './QEntry.jsx';
import axios from 'axios';

const QAListView = () => {

  const [questions, setQuestions ] = React.useState([]);
  const [ qSlice, setQSlice ] = React.useState(4);

  const getAllQuestions = () => {
    const params = {
      product_id: 40489,  //change out of hardcode for integration
    };
    axios.get('/qa/questions', { params })
    .then((result) => {
    console.log('getting is back:', result.data.results);
    var sortedQ = result.data.results.sort((a,b) => {a.question_helpfulness - b.question_helpfulness})
    setQuestions(sortedQ)});
  }

  React.useEffect(() => {
    getAllQuestions()
  }, [])

return (
<div>
<div> QA LIST GOES HERE</div>
<div> {questions.slice(0,qSlice).map((q, i) => {return <QEntry key={i} question={q}/>})}</div>
{qSlice < questions.length ? <button onClick={() => {setQSlice(qSlice+2)}}>MORE ANSWERED QUESTIONS</button> : null}
<button>ADD A QUESTION</button>
</div>

)

};

export default QAListView