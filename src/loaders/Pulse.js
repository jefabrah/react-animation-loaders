import React from 'react';
import { StyleRoot } from 'radium';
import PulseDetail from './PulseDetail';

const Pulse = ({ loading, children, duration }) => {
  const key = `pulse${duration}`;

  return (
    <StyleRoot key={key}>
      <PulseDetail loading={loading}
        duration={duration}>
        {children}
      </PulseDetail>
    </StyleRoot>
  )
}

export default Pulse;
