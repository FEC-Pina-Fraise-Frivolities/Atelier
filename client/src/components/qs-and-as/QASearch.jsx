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
  <div className="qSearch">
    <input className="qsearchTerm" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='got questions? we got answers...'/>
  </div>
  )

};

export default QASearch;
