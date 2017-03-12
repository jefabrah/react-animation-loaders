import React from 'react';

const Loader = ({ children, name, credit, creditLink, creditLinkText }) => (
  <div className="loader">
    <div className="loader-heading">
      <h2>{name}</h2>
      <small> 
        <b>Credit:</b> {credit}'s 
        <cite><a href={creditLink}> {creditLinkText}</a></cite>
      </small>
    </div>

    {children}
    
  </div>
)

export default Loader;