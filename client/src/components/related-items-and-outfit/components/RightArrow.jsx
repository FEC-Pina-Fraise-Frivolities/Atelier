import { React } from 'react';

function RightArrow({ index, setIndex }) {
  const right = '>';
  return (
    <button className="rightButton" type="button" onClick={() => {
      setIndex(index + 1); }}>
      {' '}
      {right}
      {' '}
    </button>
  );
}
export default RightArrow;
