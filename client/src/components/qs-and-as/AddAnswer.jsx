import { React, useState } from 'react';
import axios from 'axios';
import PhotoUpload from './PhotoUpload';

function AddAnswer({ show, q }) {
  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      body: answer,
      name,
      email,
      photos,
    };

    const payload = { question_id: q.question_id, body };
    axios.post('/qa/questions/:question_id/answers', payload)
      .then(show(false))
      .catch(console.log(e));
  };

  return (
    <div className="qaModal">
      <form className="qaModalContent" onSubmit={handleSubmit}>
        <h2>Submit your answer</h2>
        <h4>
          {document.querySelector('.productName').innerText}
        </h4>
        <h5>{q.question_body}</h5>

        <label> Your answer </label>
        <textarea type="text" maxLength="1000" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="answer here" required />
        <span className="characterCount">
          {answer.length}
          /1000
        </span>

        <label>What is your nickname</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Example: jackson11!" required />
        <small>For privacy reasons, do not use your full name or email address</small>

        <label className="qaEmailAdd">Your email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Example: username@email.com" />
        <small>For authentication reasons, you will not be emailed</small>

        <PhotoUpload setPhotos={setPhotos} photos={photos} />

        <button className="qaAnswerSubmit" type="submit">Submit</button>

        <div className="qaPoint" onClick={() => show(false)}><u>Cancel</u></div>
      </form>

    </div>
  );
}

export default AddAnswer;
