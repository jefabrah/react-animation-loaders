import React from 'react';
import { StyleRoot } from 'radium';
import PulseDetail from './PulseDetail';

const Pulse = ({ loading, children, duration, size }) => {
  const key = `pulse${duration}${size}`;

  return (
    <StyleRoot key={key}>
      <PulseDetail loading={loading}
        duration={duration} size={size}>
        {children}
      </PulseDetail>
    </StyleRoot>
  )
}

export default Pulse;
