import React from 'react';
import $ from 'jquery';

function PhotoUpload({ inputHandler }) {
  function previewFiles(e) {
    const $preview = $('#preview');
    const $files = $('input[type=file]').prop('files');

    function readAndPreview(file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const image = new Image(100, 100);
        image.src = reader.result;
        const $item = $('<li></li>');
        $item.append(image, `<span>${file.name}</span>`);
        $preview.append($item);
        inputHandler(e, reader.result);

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
    <div className="photo input">
      <p>
        Upload photos
        <small> (5 max)</small>
      </p>
      {/* eslint "react/self-closing-comp":0 */}
      <input name="photos" type="file" accept=".png, .jpg, .jpeg" multiple onChange={previewFiles}></input>
      <ul id="preview"></ul>
    </div>
  );
}

export default PhotoUpload;
