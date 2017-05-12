import React from 'react';
import loaders from './loader_info';

const LoaderSelect = ({ setLoader, activeLoader }) => {
  const loaderNames = Object.keys(loaders);
  
  return (
  <div className="loader-select">
    <label htmlFor="loader-select" className="loader-select">Loader</label>
    <select value={activeLoader} onChange={ e => setLoader(e.target.value)} id="loader-select">

      {loaderNames.map( loaderName => (
        <option key={loaderName} value={loaderName} >{loaderName}</option>
      ))}

    </select>
  </div>
  )
}

export default LoaderSelect;
