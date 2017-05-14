import React from 'react';
import loaders from './loader_info';

const LoaderSelect = ({ setLoader, activeLoader }) => {
  const loaderNames = Object.keys(loaders);

  const handleLoaderArrow = (direction) => {
    const activeLoaderIndex = loaderNames.indexOf(activeLoader);
    const nextLoaderIndex = loaderNames.indexOf(loaderNames[activeLoaderIndex]) + direction;
    
    if ((nextLoaderIndex + 1) > loaderNames.length) {
      setLoader(loaderNames[0]);
    }
    else if ((nextLoaderIndex) === -1) {
      setLoader(loaderNames[loaderNames.length - 1]);
    }
    else {
      setLoader(loaderNames[nextLoaderIndex]);
    }
  }
  
  return (
  <div className="loader-select-wrapper">
    <div className="loader-select">
      <label htmlFor="loader-select-label" className="loader-select-label">Loader (Animation)</label>
      <select value={activeLoader} onChange={ e => setLoader(e.target.value)} className="loader-select-box">

        {loaderNames.map( loaderName => (
          <option key={loaderName} value={loaderName} >{loaderName}</option>
        ))}

      </select>
    </div>
    
    <div className="loader-select-arrows">
      <div className="fa fa-arrow-left" onClick={() => handleLoaderArrow(-1)}></div>
      <div className="fa fa-arrow-right" onClick={() => handleLoaderArrow(1)}></div>
    </div>

  </div>
  )
}

export default LoaderSelect;
