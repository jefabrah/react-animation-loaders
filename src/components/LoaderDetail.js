import React from 'react';
import { StyleRoot } from 'radium';

const LoaderDetail = ({ children, name, credit, creditLink, creditLinkText, credited, inspired }) => {
  const renderCreditDetail = () => {
    if (credited) {
      return (
        <small>
          <b>Credit:</b> {credit ? `${credit}'s` : ""} 
          <cite><a href={creditLink || ""}> {creditLinkText || ""}</a></cite>
        </small>
      )
    }
    else if (inspired) {
      return (
        <small>
          <b>Inspired by:</b> {credit ? `${credit}'s` : ""} 
          <cite><a href={creditLink || ""}> {creditLinkText || ""}</a></cite>
        </small>
      )
    }
    else return null
  }

  return (
    <StyleRoot>
      <div className="loader">
        <div className="loader-heading">
          <h2>{name}</h2>
          {renderCreditDetail()}
        </div>
        {children}
      </div>
    </StyleRoot>
  )
}

export default LoaderDetail;