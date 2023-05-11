import { React, useEffect, useState } from 'react';

const AddAnswer = (props) => {

return (
<div>
  <div>Ask your question about PRODUCT NAME</div>
  <form>
  <label htmlFor="question">Your Question</label>
  <input type="text" id="question" name="question"></input>
  <label htmlFor="name">What is your nickname</label>
  <input type="text" id="name" name="name"></input>
  <div>For privacy reasons, do not use your full name or email address</div>
  <input type="submit" value="Submit"></input>
  </form>

</div>
)

};

export default AddAnswer;