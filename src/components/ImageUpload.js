import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = ({ setResult }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    
    setResult();
  };

  return (
    <div className="image-upload-container">
      <div className="form">
        <div className="drop-container">
          <label className="drop-title">Drop your image here or click to select</label>
          <input id="file-input" type="file" onChange={handleFileChange} />
        </div>
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
        <button className="upload-button" onClick={handleUploadClick}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
