import React from 'react';
import $ from 'jquery';

function PhotoUpload({ setPhotos, photos }) {
  function previewFiles(e) {
    const $preview = $('#qaPreview');
    const $files = $('input[type=file]').prop('files');

    function readAndPreview(file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const image = new Image(100, 100);
        image.src = reader.result;
        const $item = $('<li></li>');
        $item.append(image, `<span>${file.name}</span>`);
        $preview.append($item);
        const photoURL = URL.createObjectURL(file);
        console.log('This is URLObj:', photoURL);

        setPhotos(photos.concat(photoURL));

        if ($preview.find('li').length === 5) {
          $('input[type=file]').toggle();
        }
      }, false);

      reader.readAsDataURL(file);
    }
    if ($files) {
      Array.prototype.forEach.call($files, readAndPreview);
    }
  }

  return (
    <div className="qaPhoto">
      <p>
        Upload photos
        <small> (5 max)</small>
      </p>
      <input name="photos" type="file" accept=".png, .jpg, .jpeg" multiple onChange={previewFiles}></input>
      <ul id="qaPreview"></ul>
    </div>
  );
}

export default PhotoUpload;