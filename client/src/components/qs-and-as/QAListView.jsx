import { React, useEffect, useState } from 'react';
import axios from 'axios';
import QEntry from './QEntry';
import QASearch from './QASearch';
import AddQuestion from './AddQuestion';

function QAListView({ productId }) {
  const [questions, setQuestions] = useState([]);
  const [qSlice, setQSlice] = useState(2);
  const [showAddQuestion, setAddQuestion] = useState(false);
  const [questionsRaw, setQuestionsRaw] = useState([]);

  const getAllQuestions = () => {
    const params = {
      product_id: productId,
      count: 200,
    };
    axios.get('/qa/questions', { params })
      .then((r) => { setQuestions(r.data.results); setQuestionsRaw(r.data.results); });
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <div>
      <div>
        <QASearch setQuestions={setQuestions} questions={questionsRaw} reset={getAllQuestions} />
      </div>
      <div className="qListView">
        {questions.slice(0, qSlice).map((q, i) => <QEntry key={i} question={q} />)}
        {qSlice < questions.length ? <button className="qaMoreQ" type="button" onClick={() => { setQSlice(qSlice + 2); }}>MORE ANSWERED QUESTIONS</button> : null}
        <button className="qaMoreQ" type="button" onClick={() => { setAddQuestion(true); }}>{questions.length === 0 ? 'Be the first to ask!' : 'ADD A QUESTION'}</button>
        <div>
          {showAddQuestion ? <AddQuestion show={setAddQuestion} productId={40364} /> : null}
        </div>
      </div>
    </div>
  );
}

export default QAListView;
