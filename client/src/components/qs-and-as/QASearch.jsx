import { React, useEffect, useState, useRef } from 'react';

const QASearch = (props) => {
  const [ search, setSearch ] = useState('');

  const didMount = useRef(false)

  useEffect(() => {
    if (search.length > 2) {
      const delay = setTimeout(() => {
        let filteredQ = props.questions.filter(question => question.question_body.toLowerCase().indexOf(search.toLowerCase()) !== -1)
        props.setQuestions(filteredQ)}, 1000);
      return () => {clearTimeout(delay)}
    }
    if (search.length === 0 && didMount.current) {
      props.reset();
    } else { didMount.current = true}

  }, [search])

  return (
  <div>
    <input className="qSearch" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'></input>
  </div>
  )

};

export default QASearch