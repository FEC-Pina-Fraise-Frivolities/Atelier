import React from 'react';
import $ from 'jquery';

function PhotoUpload({ setPhotos, photos }) {
  function previewFiles() {
    const $preview = $('#qaPreview');
    const $files = $('input[type=file]').prop('files');

    function readAndPreview(file) {
      const url = URL.createObjectURL(file);
      const image = new Image(100, 100);
      image.src = url;
      const $item = $('<li></li>');
      $item.append(image, `<span>${file.name}</span>`);
      $preview.append($item);
      setPhotos(photos.concat(url));

      if ($preview.find('li').length === 5) {
        $('input[type=file]').toggle();
      }
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
      <input name="photos" type="file" accept=".png, .jpg, .jpeg" multiple onChange={previewFiles} />
      <ul id="qaPreview" />
    </div>
  );
}

export default PhotoUpload;
