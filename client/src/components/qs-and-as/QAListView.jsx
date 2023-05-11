import React from 'react';
import QEntry from './QEntry.jsx';
import axios from 'axios';

const QAListView = () => {

  const [questions, setQuestions ] = React.useState([]);
  const [ qSlice, setQSlice ] = React.useState(2);

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


//state array of all questions
//state n number for slice that setN increases with button push
//slice map provided to QEntry
//each QEntry is called with product question ID

return (
<div>
<div> QA LIST GOES HERE</div>
<div> {questions.slice(0,qSlice).map((q) => {return <QEntry question={q}/>})}</div>
<button onClick={() => {setQSlice(qSlice+2)}}>MORE ANSWERED QUESTIONS</button>
<button>ADD A QUESTION</button>
</div>

)

};

export default QAListView