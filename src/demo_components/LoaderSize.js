import React from 'react';

const LoaderSize = ({ setSize, size }) => (
    
  <div className="loader-size">
    <label>
    <input type="radio" value="sm" 
            onChange={setSize} checked={size === 'sm'} />
      Small
    </label>
    
    <label>
      <input type="radio" value="md" 
            onChange={setSize} checked={size === 'md'} />
      Medium (default)
    </label>
    
    <label>
      <input type="radio" value="lg" 
            onChange={setSize} checked={size === 'lg'} />
      Large
    </label>
  </div>
)

export default LoaderSize;
