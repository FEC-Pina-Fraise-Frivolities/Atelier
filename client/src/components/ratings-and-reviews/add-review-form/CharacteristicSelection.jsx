import React from 'react';
/* eslint "jsx-a11y/label-has-associated-control":0 */

function CharacteristicSelection({ characteristic, inputHandler }) {
  return (
    <div className={`${characteristic} subsection`}>
      <label>
        {`${characteristic}:`}
        <span>&#42;</span>
        <span className="error"> Please select your rating</span>
      </label>
      {/* eslint "react/self-closing-comp":0 */}
      <div className="radio">
        <label htmlFor="1">
          Too bad
          <input type="radio" name={characteristic} value={1} onClick={inputHandler} required></input>
        </label>
        <label htmlFor="2">
          Bad
          <input type="radio" name={characteristic} value={2} onClick={inputHandler} required></input>
        </label>
        <label htmlFor="3">
          Okay
          <input type="radio" name={characteristic} value={3} onClick={inputHandler} required></input>
        </label>
        <label htmlFor="4">
          Great
          <input type="radio" name={characteristic} value={4} onClick={inputHandler} required></input>
        </label>
        <label htmlFor="5">
          Love it
          <input type="radio" name={characteristic} value={5} onClick={inputHandler} required></input>
        </label>
      </div>
    </div>
  );
}

export default CharacteristicSelection;
