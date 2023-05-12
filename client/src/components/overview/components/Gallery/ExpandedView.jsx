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

  const zoomIn = (event, element) => {
    const shiftX = event.pageX;
    const shiftY = event.pageY;
    // element.style.setProperty('transform', `translate(${shiftX}px, ${shiftY}px)`);
    element.style.setProperty('transform', 'scale(2.5)');
  };

  const zoomOut = (event, element) => {
    const shiftX = event.pageX;
    const shiftY = event.pageY;
    // element.style.setProperty('transform', `translate(${shiftX}px, ${shiftY}px)`);
    element.style.setProperty('transform', 'scale(1)');
  };

  return ReactDom.createPortal(

    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div
        id="modal"
        style={MODAL_STYLES}
        onClick={onClose}

      >
        <img
          id="modalPhoto"
          src={selectedPhoto}
          alt={selectedPhoto}
          onMouseMove={(e) => {
            zoomIn(e, document.querySelector('#modalPhoto'));
          }}
          onMouseOut={(e) => {
            zoomOut(e, document.querySelector('#modalPhoto'));
          }}
        />
      </div>
    </>,
    document.getElementById('portal'),
  );
}

export default ExpandedView;