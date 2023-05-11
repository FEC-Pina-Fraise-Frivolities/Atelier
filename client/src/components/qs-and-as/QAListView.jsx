import React from 'react';
import QEntry from './QEntry';
import axios from 'axios';
import AddQuestion from './AddQuestion';

const QAListView = () => {

  const [ questions, setQuestions ] = React.useState([]);
  const [ qSlice, setQSlice ] = React.useState(4);
  const [ showAddQuestion, setAddQuestion] = React.useState(false)

  const getAllQuestions = () => {
    const params = {
      product_id: 40364,  //change out of hardcode for integration
      count: 100
    };
    axios.get('/qa/questions', { params })
    .then((result) => {setQuestions(result.data.results)});
  }

  React.useEffect(() => {
    getAllQuestions()
  }, [])
console.log(questions)
return (
<div>
<div className="qListView"> {questions.slice(0,qSlice).map((q, i) => {return <QEntry key={i} question={q}/>})}</div>
{qSlice < questions.length ? <button onClick={() => {setQSlice(qSlice+2)}}>MORE ANSWERED QUESTIONS</button> : null}
<button onClick={()=>{setAddQuestion(true)}}>ADD A QUESTION</button>
<div>{showAddQuestion ? <AddQuestion show={setAddQuestion} productId={40364}/> : null}</div>
</div>

)

};

export default QAListView