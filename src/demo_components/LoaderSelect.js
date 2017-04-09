import React from 'react';

const LoaderSelect = ({ setLoader, activeLoader }) => (
    
  <div className="loader-select">
    <select value={activeLoader} onChange={ e => setLoader(e.target.value)}>
      <option value="pulse">Pulse</option>
      <option value="amcdots">AMCDots</option>
      <option value="blotty">Blotty</option>
      <option value="pulse">Pulse</option>
      <option value="gspinner">GSpinner</option>
    </select>
  </div>
)

export default LoaderSelect;
