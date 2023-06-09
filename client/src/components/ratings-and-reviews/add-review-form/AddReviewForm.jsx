import { React, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import CharacteristicSelection from './CharacteristicSelection';
import PhotoUpload from './PhotoUpload';

function AddReviewForm({
  characteristics, showForm, modalHandler, productId,
}) {
  if (!showForm) {
    return null;
  }

  const [reviewObj, setReviewObj] = useState({
    product_id: productId,
    rating: '',
    summary: '',
    body: '',
    recommend: '',
    name: '',
    email: '',
    photos: [],
    characteristics: '',
  });

  function starHandler(e) {
    const index = 5 - e.target.id;
    $('.dynamic-star span').slice(0, index).css('color', '#ccc');
    $('.dynamic-star span').slice(index).css('color', 'black');
    setReviewObj({ ...reviewObj, rating: Number(e.target.id) });
  }

  function inputHandler(e, url) {
    const characterArr = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];
    if (characterArr.includes(e.target.name)) {
      const { id } = characteristics[e.target.name];
      setReviewObj({
        ...reviewObj,
        characteristics: { ...reviewObj.characteristics, [id]: Number(e.target.value) },
      });
    } else if (e.target.name === 'photos') {
      setReviewObj({ ...reviewObj, photos: reviewObj.photos.concat(url) });
    } else if (e.target.name === 'recommend') {
      setReviewObj({ ...reviewObj, recommend: Boolean(e.target.value) });
    } else {
      setReviewObj({ ...reviewObj, [e.target.name]: e.target.value });
    }
  }

  function dataValidation() {
    let submit = true;
    // validate rating, recommend, name
    const commonValidation = ['rating', 'recommend', 'name'];
    commonValidation.forEach((key) => {
      if (reviewObj[key] === '') {
        submit = false;
        $(`.${key} .error`).toggle();
      }
    });

    // validate body
    if (reviewObj.body.length < 50) {
      submit = false;
      $('.body .error').toggle();
    }

    // validate email
    const regex = /@\w*\./g;
    if (reviewObj.email.length === 0 || reviewObj.email.search(regex) === -1) {
      submit = false;
      $('.email .error').toggle();
    }

    // validate characteristics
    Object.keys(characteristics).forEach((key) => {
      const { id } = characteristics[key];
      if (reviewObj.characteristics[id] === undefined) {
        submit = false;
        $(`.${key} .error`).toggle();
      }
    });
    return submit;
  }

  function submitHandler(e) {
    e.preventDefault();
    if (dataValidation()) {
      modalHandler();
      axios.post('/reviews', reviewObj)
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function closeHandler() {
    modalHandler();
  }

  /* eslint "jsx-a11y/label-has-associated-control":0 */
  return (
    <div className="modal">
      <form id="review-form">
        <h1>Write your review</h1>
        <fieldset className="overall section">
          <legend>Overall Rating</legend>
          <div className="rating subsection">
            <label>
              Rating:
              <span>&#42;</span>
              <span className="error"> Please select your rating</span>
            </label>
            <div className="dynamic-star">
              <span id={5} onClick={starHandler}>&#9733;</span>
              <span id={4} onClick={starHandler}>&#9733;</span>
              <span id={3} onClick={starHandler}>&#9733;</span>
              <span id={2} onClick={starHandler}>&#9733;</span>
              <span id={1} onClick={starHandler}>&#9733;</span>
            </div>
          </div>
          <div className="recommend subsection">
            <label>
              Recommendation:
              <span>&#42;</span>
              <span className="error"> Please select your recommendation</span>
            </label>
            <div className="radio">
              {/* eslint "react/self-closing-comp":0 */}
              <label htmlFor="yes">
                Yes
                <input type="radio" name="recommend" value required onClick={inputHandler}></input>
              </label>
              <label htmlFor="no">
                No
                <input type="radio" name="recommend" value={false} required onClick={inputHandler}></input>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="characteristics section">
          <legend>Characteristics Rating</legend>
          {Object.keys(characteristics).map((key) => (
            <CharacteristicSelection characteristic={key} key={key} inputHandler={inputHandler} />
          ))}
        </fieldset>
        <fieldset className="review section">
          <legend>Review</legend>
          <div className="summary subsection">
            <label>
              Summary
              <small> (60 characters max)</small>
              :
            </label>
            <textarea name="summary" maxLength={60} placeholder="Best purchase ever!" rows={1} cols={60} value={reviewObj.summary} onChange={inputHandler}></textarea>
          </div>
          <div className="body subsection">
            <label>
              Details
              <small> (1000 characters max)</small>
              :
              <span>&#42;</span>
              <span className="error"> Say something about our product (50 characters min). We appreciate and value your feedback!</span>
            </label>
            <textarea
              name="body"
              type="text"
              maxLength={1000}
              minLength={50}
              placeholder="Why did you like the product or not?"
              rows={20}
              cols={60}
              value={reviewObj.body}
              onChange={inputHandler}
              required
            >
            </textarea>
            <span className="call-out">{(50 - reviewObj.body.length) > 0 ? `Minimum required characters left: ${50 - reviewObj.body.length}` : 'Minimum reached'}</span>
          </div>
        </fieldset>
        <PhotoUpload inputHandler={inputHandler} />
        <fieldset className="user section">
          <legend>User information</legend>
          <div className="name subsection">
            <label>
              What is your nickname?
              <span>&#42;</span>
              <small> (60 characters max)</small>
              <span className="error"> Please enter your name</span>
            </label>
            <textarea name="name" maxLength={60} placeholder="jackson11" rows={1} cols={60} value={reviewObj.name} onChange={inputHandler} required></textarea>
            <small className="call-out">For privacy reasons, do not use your full name or email address</small>
          </div>
          <div className="email subsection">
            <label>
              What is your email?
              <span>&#42;</span>
              <small> (60 characters max)</small>
              <span className="error"> Please enter a valid email</span>
            </label>
            <textarea name="email" maxLength={60} placeholder="jackson11@email.com" rows={1} cols={60} value={reviewObj.email} onChange={inputHandler} required></textarea>
            <small className="call-out">For authentication reasons, you will not be emailed</small>
          </div>
        </fieldset>
        <button id="submit-form" type="submit" onClick={submitHandler}>Submit</button>
        <button id="close-form" type="button" onClick={closeHandler}>X</button>
      </form>
    </div>
  );
}

export default AddReviewForm;
