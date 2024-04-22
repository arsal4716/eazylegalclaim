import React from 'react';
import '../styles/imgText.css';

const ImageText = ({ imageUrl, heading, text, className }) => {
  return (
    <div className={`image-text-container ${className}`}>
      <div className="text-content">
        <h3 className="text">{text}</h3>
        <h5 className="heading">{heading}</h5>
      </div>
      <img src={imageUrl} alt="Image" className="image" />
    </div>
  );
};

export default ImageText;
