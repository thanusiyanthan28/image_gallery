import React from 'react';
import './ImageGallery.css'; // Assuming you have a CSS file for styling

export const ImageGallery1 = () => {
  return (
    <div className="main">
      <div className="div1">
        {/* Content for div1 */}
      </div>
      <div className="div2">
        {/* Content for div2 */}
        <div className="button-left">
          <button>Button Left</button>
        </div>
        <div className="button-right">
          <button>Button Right</button>
          <button>Button Right</button>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery1;
