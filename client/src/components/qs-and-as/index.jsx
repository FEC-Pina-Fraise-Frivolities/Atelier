import React from 'react';
import QASearch from './QASearch.jsx';
import QAListView from './QAListView.jsx';


const QAIndex = () => {

return (
<div>
<div className="qaTitle"> QUESTIONS & ANSWERS</div>
<div> <QASearch /></div>
<div className="qaListView"><QAListView /></div>

</div>

)

};

export default QAIndex;