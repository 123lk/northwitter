import React from 'react';
import '../css/LoadingSpinner.css';

function LoadingSpinner () {
  return (
      <div className="col-sm-5" id='loading-spinner'>
      <h4>Loading...</h4>
      <span className="glyphicon glyphicon-refresh" id='loading-logo' aria-hidden="true"></span>
      </div>
  );
}

export default LoadingSpinner;