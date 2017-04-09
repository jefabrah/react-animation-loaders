import React from 'react';

const LoaderDurationInput = ({ setDuration, duration }) => (
    
  <div className="loader-select">
    <input type="number" value={duration} onChange={ e => setDuration(Number(e.target.value))}/>
  </div>
)

export default LoaderDurationInput;
