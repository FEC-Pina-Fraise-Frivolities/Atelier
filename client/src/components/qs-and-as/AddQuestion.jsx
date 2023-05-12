import { React, useEffect, useState } from 'react';
import axios from 'axios';

const AddQuestion = (props) => {

  const [ question, setQuestion ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let param = {
      body: question,
      name: name,
      email: email,
      product_id: props.productId
    }

    axios.post('/qa/questions', param)
    .then((r) => props.show(false))
    .catch((e) => console.log(e))

  }



return (
<div className="Modal">
<form className="modalContent" onSubmit={handleSubmit}>
  <h2>Ask your question about PRODUCT NAME</h2>

  <label> Your Question </label>
  <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />

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

export default AddQuestion;