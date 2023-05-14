import { React, useState } from 'react';

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
              <img src={photo.url} alt="Not Found" key={photo.id} style={{ height: '100px', width: '100px' }} />
            ))}
          </div>
        )}
    </div>
  );
}

export default Body;
