import { React, useState, useContext } from 'react';
import $ from 'jquery';
import { FilterContext } from '../index';

function Bar({ percentage, starName }) {
  const { filterReview, setFilterReview } = useContext(FilterContext);
  const starNumber = Number(starName.substring(0, 1));
  const id = `${starNumber}-star`;
  const [add, setAdd] = useState(true);

  function filterHandler() {
    if (add) {
      setFilterReview(filterReview.concat(starNumber));
      $(`#${id}`).css('background', '#C9F7DF');
    } else {
      setFilterReview(filterReview.filter((num) => (num !== starNumber)));
      $(`#${id}`).css('background', '');
    }
    setAdd(!add);
  }
  return (
    <div id={id} className="bar container" onClick={filterHandler}>
      <span>{starName}</span>
      <div className="double-bar container">
        {/* eslint "react/self-closing-comp":0 */}
        <div className="filled" style={{ width: percentage, overflow: 'hidden' }}></div>
        <div className="empty"></div>
      </div>
    </div>
  );
}

export default Bar;
