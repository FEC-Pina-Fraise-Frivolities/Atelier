import { React } from 'react';

function LeftArrow({ index, setIndex }) {
  const left = '<';
  return (
    <button
      className="leftButton"
      type="button"
      onClick={() => {
        setIndex(index - 1);
      }}
    >
      {' '}
      {left}
      {' '}
    </button>
  );
}
export default LeftArrow;
