import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  'max-width': '500px',
  'max-height': '500px',
  overflow: 'hidden',
  'overflow-y': 'auto',
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

  return ReactDom.createPortal(

    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <img src={selectedPhoto} alt={selectedPhoto} onClick={onClose} />
      </div>
    </>,
    document.getElementById('portal'),
  );
}

export default ExpandedView;
