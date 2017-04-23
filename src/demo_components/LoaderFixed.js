import React from 'react';

const LoaderFixed = ({ setFixed, isFixed, renderFixed }) => (
    
  <div className="loader-fixed">
    <label>
    <input type="radio" value={true} 
            onChange={setFixed} checked={isFixed === 'true'} />
      Fixed (Default) {typeof isFixed}
    </label>
    
    <label>
      <input type="radio" value={false}
            onChange={setFixed} checked={isFixed === 'false'} />
      Unfixed (As Displayed)
    </label>
    
    <input type="button" value="Preview Fixed" 
          onClick={renderFixed} className="btn-preview"/>
  </div>
)

export default LoaderFixed;
