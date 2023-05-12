import React from 'react';

function Checkbox({
  selectedStyle, style, selectedPhoto, thumb, selectedThumb,
}) {
  return (
    <div className="selector">
      {style === selectedStyle && thumb === selectedThumb && <div className="checkmark">✔</div>}
    </div>
  );
}

export default Checkbox;
