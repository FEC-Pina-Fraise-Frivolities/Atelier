import { React, useEffect, useState } from 'react';
import axios from 'axios';

const AddAnswer = (props) => {
  const [ answer, setAnswer ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = {
      body: answer,
      name: name,
      email: email
    };
    let payload = {question_id: props.q.question_id, body: body};
    axios.post('/qa/questions/:question_id/answers', payload)
    .then((r) => props.show(false))
    .catch((e) => console.log(e));
  }

return (
<div className="Modal">
<form className="modalContent" onSubmit={handleSubmit}>
  <h2>Submit your answer</h2>
  <h4>PROUCT NAME: {props.q.question_body}</h4>

  <label> Your answer </label>
  <textarea type="text" maxLength="1000" value={answer} onChange={(e) => setAnswer(e.target.value)} required />

  <label>What is your nickname</label>
  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Example: jackson11!" required/>
  <div>For privacy reasons, do not use your full name or email address</div>

  <label>Your email</label>
  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
  <div>For authentication reasons, you will not be emailed</div>

  <button>Submit</button>
  <div onClick={() => props.show(false)}><u>Cancel</u></div>
  </form>

</div>
)

};

export default AddAnswer;