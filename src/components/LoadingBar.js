// LoadingBar.js
import React from 'react';
import { ClipLoader } from 'react-spinners';
import './LoadingBar.css';

const LoadingBar = ({ loading }) => {
  return (
    <div className={`loading-bar ${loading ? 'visible' : ''}`}>
      <ClipLoader color={"#ffffff"} loading={loading} size={50} />
    </div>
  );
};

export default LoadingBar;
