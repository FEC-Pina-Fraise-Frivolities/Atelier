import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(72, 61, 139, .7)',
  'justify-content': 'center',
  'align-items': 'center',
  padding: '50px',
  zIndex: 1000,
  width: '100%',
  height: '90%',
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
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES} onClick={onClose}>
        <img src={selectedPhoto} alt={selectedPhoto} />
      </div>
    </>,
    document.getElementById('portal'),
  );
}

export default ExpandedView;
