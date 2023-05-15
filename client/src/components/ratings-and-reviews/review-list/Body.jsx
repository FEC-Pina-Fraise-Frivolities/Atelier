import { React, useState } from 'react';
import $ from 'jquery';

function Body({ body, photos }) {
  const [bodyDisplay, setBodyDisplay] = useState(body.substring(0, 250));
  const [button, setButton] = useState('...more');

  function displayMore(e) {
    if (e.target.value.includes('more')) {
      setBodyDisplay(body);
      setButton('hide');
    } else {
      setBodyDisplay(body.substring(0, 250));
      setButton('...more');
    }
  }

  function showImageHandler(e) {
    const id = e.target.id;
    $(`#${id}-modal`).css('display', 'flex');
  }

  function closeImageHandler(e) {
    const id = e.target.value;
    $(`#${id}-modal`).css('display', 'none');
  }

  return (
    <div className="body">
      {body.length <= 250
        ? <p>{bodyDisplay}</p>
        : (
          <p>
            {bodyDisplay}
            <input type="button" value={button} onClick={displayMore} />
          </p>
        )}
      {photos.length === 0
        ? null
        : (
          <div className="images">
            {photos.map((photo) => (
              <div className="image" key={photo.id}>
                <img id={photo.id} src={photo.url} alt="Not Found" key={photo.id} style={{ height: '100px', width: '100px' }} onClick={showImageHandler}/>
                <div className="image-modal" id={`${photo.id}-modal`}>
                  <img src={photo.url} alt="Not Found" />
                  <button type="button" onClick={closeImageHandler} value={photo.id}>X</button>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export default Body;
