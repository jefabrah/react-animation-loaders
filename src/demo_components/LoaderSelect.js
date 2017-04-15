import React from 'react';

const LoaderSelect = ({ setLoader, activeLoader }) => (
    
  <div className="loader-select">
    <label htmlFor="loader-select" className="loader-select">Loader</label>
    <select value={activeLoader} onChange={ e => setLoader(e.target.value)} id="loader-select">
      <option value="Pulse">Pulse</option>
      <option value="AMCDots">AMCDots</option>
      <option value="Blotty">Blotty</option>
      <option value="GSpinner">GSpinner</option>
    </select>
  </div>
)

export default LoaderSelect;
