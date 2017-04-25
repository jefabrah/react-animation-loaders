import React from 'react';

const LoaderFixed = ({ setFixed, isFixed, renderFixed }) => (
    
  <div className="loader-fixed">
    <div className="fixed-radios">
      <label>
      <input type="radio" value={true} 
              onChange={setFixed} checked={isFixed === 'true'} />
        Fixed (Default)
      </label>
      
      <label>
        <input type="radio" value={false}
              onChange={setFixed} checked={isFixed === 'false'} />
        Unfixed (As Displayed)
      </label>
    </div>
    
    <input type="button" value="Preview (Fixed only)" 
          onClick={renderFixed} className="btn-preview"/>
  </div>
)

export default LoaderFixed;
