import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, visibleCount }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - visibleCount, 0));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(startIndex + 3, images.length - visibleCount));
  };

  const handleImageClick = (index) => {
    setSelectedImage(images[startIndex + index]);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='main'>
        
        
        <h1>Image Gallery</h1>
        <div className='main2'>
        <button onClick={handlePrevClick} className={`nav-btn-pre ${startIndex > 0? 'active-btn' : 'inactive-btn'}`}>
            &lt;
          </button>
      <div className="image-gallery">

        {images.slice(startIndex, startIndex + visibleCount).map((image, index) => (
          <div key={index} className="image-container" onClick={() => handleImageClick(index)}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
     
      </div>
      <button onClick={handleNextClick} className={`nav-btn-nxt ${startIndex + visibleCount < images.length? 'active-btn' : 'inactive-btn'}`} >
            &gt;
          </button>
      </div>

       
      {selectedImage && (
        //selected image
        <div className="modal">
          <button onClick={handleCloseModal} className="close-btn">
            &times;
          </button>
          {/* <img src={selectedImage.url} alt={selectedImage.alt} /> */}
          <iframe
        title="360 degree panorama"
        width="100%"
        height="100%"
        src={selectedImage.emlink}
        allowFullScreen=""
        frameBorder="0"
      ></iframe>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
