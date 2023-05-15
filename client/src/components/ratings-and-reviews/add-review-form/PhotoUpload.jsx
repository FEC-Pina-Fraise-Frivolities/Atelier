import React from 'react';
import $ from 'jquery';

/* eslint "jsx-a11y/label-has-associated-control":0 */
function PhotoUpload({ inputHandler }) {
  function previewFiles(e) {
    const $preview = $('#preview');
    const $files = $('input[type=file]').prop('files');

    function readAndPreview(file) {
      // const reader = new FileReader();
      // reader.addEventListener('load', () => {
      //   const image = new Image(100, 100);
      //   image.src = reader.result;
      //   const $item = $('<li></li>');
      //   $item.append(image, `<span>${file.name}</span>`);
      //   $preview.append($item);
      //   inputHandler(e, reader.result);

      //   if ($preview.find('li').length === 5) {
      //     $('input[type=file]').toggle();
      //   }
      // }, false);
      // reader.readAsDataURL(file);
      const url = URL.createObjectURL(file);
      const image = new Image(100, 100);
      image.src = url;
      const $item = $('<li></li>');
      $item.append(image, `<span>${file.name}</span>`);
      $preview.append($item);
      inputHandler(e, url);

      if ($preview.find('li').length === 5) {
        $('input[type=file]').toggle();
      }
    }
    if ($files) {
      Array.prototype.forEach.call($files, readAndPreview);
    }
  }

  return (
    <fieldset className="photo section">
      <legend>Photos</legend>
      <label>
        Upload photos
        <small> (5 max)</small>
        :
      </label>
      {/* eslint "react/self-closing-comp":0 */}
      <input name="photos" type="file" accept=".png, .jpg, .jpeg" multiple onChange={previewFiles}></input>
      <ul id="preview"></ul>
    </fieldset>
  );
}

export default PhotoUpload;
