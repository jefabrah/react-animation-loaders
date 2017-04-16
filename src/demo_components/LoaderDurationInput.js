import React from 'react';

const LoaderDurationInput = ({ duration, onDurationChange }) => (
    
  <div className="loader-select">
    <label htmlFor="duration-slider" className="duration-label">Duration: {duration}</label>
    <input type="range" min={0.25} max={4}
           id="duration-slider" step={0.25}
           value={duration} onChange={onDurationChange}/>
  </div>
)

export default LoaderDurationInput;
