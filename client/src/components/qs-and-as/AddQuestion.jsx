import { React, useState } from 'react';
import axios from 'axios';

function AddQuestion(props) {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const param = {
      body: question,
      name,
      email,
      product_id: props.productId
    }

    axios.post('/qa/questions', param)
      .then((r) => props.show(false))
      .catch((e) => console.log(e))

  }



  return (
    <div className="qaModal">
      <form className="qaModalContent" onSubmit={handleSubmit}>
        <h2>Ask your question about PRODUCT NAME</h2>

        <label> Your Question </label>
        <textarea type="text" maxLength="1000" value={question} onChange={(e) => setQuestion(e.target.value)} required />
        <span className="characterCount">{question.length}/1000</span>

        <label>What is your nickname</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Example: jackson11!" required />
        <div>For privacy reasons, do not use your full name or email address</div>

        <label>Your email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>For authentication reasons, you will not be emailed</div>

        <button>Submit</button>
        <div onClick={() => props.show(false)}><u>Cancel</u></div>
      </form>

    </div>
  )

};

export default AddQuestion;