import { React, useState } from 'react';
import axios from 'axios';
import AEntry from './AEntry';
import AddAnswer from './AddAnswer';

function QEntry({ question }) {
  const sortedAnswers = Object.values(question.answers)
    .sort((a, b) => b.helpfulness - a.helpfulness);

  const [answers, setAnswers] = useState(sortedAnswers);
  const [aSlice, setASlice] = useState(2);
  const [showAddAnswer, setShowAddAnswer] = useState(false);

  const helpfulQuestion = () => {
    axios.put('/qa/questions/:question_id/helpful', { question_id: question.question_id })
  }

  return (
    <div className="qEntry">
      <div className="qContainer">
        <div className="qaLetter">Q:</div>
        <div className="qaText">{question.question_body}</div>
        <div className="qFoot">
          <div className="qHelp"> Helpful? </div>
          <div className="qaYes qaPoint" onClick={() => helpfulQuestion()}>
            Yes &#40;
            {question.question_helpfulness}
            &#41;
          </div>
          <div>|</div>
          <div className="qaAddAnswer qaPoint" onClick={() => setShowAddAnswer(true)}> Add an answer</div>
        </div>
        {showAddAnswer ? <AddAnswer show={setShowAddAnswer} q={question} /> : null}
      </div>
      <div className="aContainer">
        {answers.slice(0, aSlice).map((a, i) => <AEntry key={i} answer={a} />)}
      </div>
      {aSlice < answers.length ? <div className="qaMoreAnswer qaPoint qFoot" onClick={() => { setASlice(aSlice + 2) }}>Show More Answers &#40;{answers.length - aSlice}&#41;</div> : null}
      {aSlice > 2 ? <div className="qaMoreAnswer qaPoint qFoot" onClick={() => { setASlice(2) }}>&and;Collapse Answers&and;</div> : null}
    </div>
  );
}

export default QEntry;
