import React from 'react';
import CharacteristicSelection from './CharacteristicSelection';
import PhotoUpload from './PhotoUpload';

function AddReviewForm({ characteristics }) {
  return (
    <form id="review-form">
      <h1>Write your review</h1>
      <div className="rating selection">
        <p>Overall Rating</p>
        <div className="dynamic-star">
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
        </div>
      </div>
      <fieldset className="recommend selection">
        <legend>Do you recommend this product?</legend>
        <div>
          {/* eslint "react/self-closing-comp":0 */}
          <label htmlFor="yes">
            Yes
            <input type="radio" name="recommend" value="Yes"></input>
          </label>
        </div>
        <div>
          <label htmlFor="no">
            No
            <input type="radio" name="recommend" value="No"></input>
          </label>
        </div>
      </fieldset>
      <div className="characters selection">
        <p>Characteristics Rating</p>
        {Object.keys(characteristics).map((key) => (
          <CharacteristicSelection characteristic={key} key={key} />
        ))}
      </div>
      <div className="summary input">
        <p>
          Review Summary
          <small> (60 characters max)</small>
        </p>
        <textarea id="summary" maxLength={60} placeholder="Best purchase ever!" rows={3}></textarea>
      </div>
      <div className="details input">
        <p>
          Review Details
          <small> (1000 characters max)</small>
        </p>
        <textarea id="summary" maxLength={1000} minLength={50} placeholder="Why did you like the product or not?" rows={20} cols={50}></textarea>
      </div>
      <PhotoUpload />
    </form>
  );
}

export default AddReviewForm;
