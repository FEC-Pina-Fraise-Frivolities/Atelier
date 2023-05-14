/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(72, 61, 139, .7)',
  padding: '50px',
  zIndex: 1000,
  width: '100%',
  height: '90%',
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

function ExpandedView({ open, selectedPhoto, onClose }) {
  if (!open) return null;
  const [isZoomed, setIsZoomed] = useState(false);

  const zoomIn = (event, element) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const { clientWidth, clientHeight } = element;
    element.style.setProperty('transform-origin', `${(offsetX / clientWidth) * 100}% ${(offsetY / clientHeight) * 100}%`);
    element.style.setProperty('cursor', 'zoom-out');
    element.style.setProperty('transform', 'scale(2.5) translate(0  , 0)');
  };

  const zoomOut = (event, element) => {
    element.style.setProperty('cursor', 'zoom-in');
    element.style.setProperty('transform', 'scale(1)');
  };

  const handleZoom = (event, element) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const { clientWidth, clientHeight } = element;
    element.style.setProperty('transform-origin', `${(offsetX / clientWidth) * 100}% ${(offsetY / clientHeight) * 100}%`);
  };

  return ReactDom.createPortal(

    <>
      <div style={OVERLAY_STYLES} />
      <div
        id="modal"
        style={MODAL_STYLES}
        onClick={(e) => {
          if (e.target.id !== 'modalPhoto') {
            onClose();
          } return null;
        }}
      >
        <img
          id="modalPhoto"
          src={selectedPhoto}
          alt={selectedPhoto}
          onClick={(e) => {
            if (!isZoomed) {
              setIsZoomed(true);
              zoomIn(e, document.querySelector('#modalPhoto'));
            } else {
              setIsZoomed(false);
              zoomOut(e, document.querySelector('#modalPhoto'));
            }
          }}
          onMouseMove={(e) => {
            if (isZoomed) {
              handleZoom(e, document.querySelector('#modalPhoto'));
            }
          }}
        />
      </div>
    </>,
    document.getElementById('portal'),
  );
}

export default ExpandedView;
