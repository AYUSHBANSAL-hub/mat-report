import React from 'react';
import "./ProgressBar.css";
const ProgressBar = ({ percent }) => (
  <div className="progress-bar-container">
    <div className="progress-bar" style={{ width: `${percent}%` }}></div>
  </div>
);

export default ProgressBar;
