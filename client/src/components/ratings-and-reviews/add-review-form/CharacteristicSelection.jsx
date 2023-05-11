import React from 'react';

function CharacteristicSelection({ characteristic, inputHandler }) {
  return (
    <fieldset className="character selection">
      <legend>{characteristic}</legend>
      {/* eslint "react/self-closing-comp":0 */}
      <div>
        <label htmlFor="1">
          Too bad
          <input type="radio" name={characteristic} value={1} onClick={inputHandler}></input>
        </label>
      </div>
      <div>
        <label htmlFor="2">
          Bad
          <input type="radio" name={characteristic} value={2} onClick={inputHandler}></input>
        </label>
      </div>
      <div>
        <label htmlFor="3">
          Okay
          <input type="radio" name={characteristic} value={3} onClick={inputHandler}></input>
        </label>
      </div>
      <div>
        <label htmlFor="4">
          Great
          <input type="radio" name={characteristic} value={4} onClick={inputHandler}></input>
        </label>
      </div>
      <div>
        <label htmlFor="5">
          Love it
          <input type="radio" name={characteristic} value={5} onClick={inputHandler}></input>
        </label>
      </div>
    </fieldset>
  );
}

export default CharacteristicSelection;
