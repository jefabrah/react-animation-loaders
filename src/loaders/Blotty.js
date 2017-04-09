import React from 'react';
import { StyleRoot } from 'radium';
import BlottyDetail from './BlottyDetail';

const Blotty = ({ loading, children, duration }) => {
  const key = `blotty${duration}`;

  return (
    <StyleRoot key={key}>
      <BlottyDetail loading={loading}
        duration={duration}>
        {children}
      </BlottyDetail>
    </StyleRoot>
  )
}

export default Blotty;
