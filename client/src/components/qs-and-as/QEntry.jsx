import { React, useEffect, useState } from 'react';
import AEntry from './AEntry.jsx'

const QEntry = () => {
  const [ question, setQuestion] = useState('Is it machine safe?');


return (
<div>
<div> Q: {question}</div>
<div> <AEntry /></div>
</div>

)

};

export default QEntry