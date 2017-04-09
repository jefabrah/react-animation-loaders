import React from 'react';
import { StyleRoot } from 'radium';
import AMCDotsDetail from './AMCDotsDetail';

const AMCDots = ({ loading, children, duration }) => {
  const key = `amcdots${duration}`;

  return (
    <StyleRoot>
      <AMCDotsDetail loading={loading}
        duration={duration} key={key}>
        {children}
      </AMCDotsDetail>
    </StyleRoot>
  )
}

export default AMCDots;
