import React from 'react';
import { StyleRoot } from 'radium';
import PulseDetail from './PulseDetail';

const Pulse = ({ loading, children, duration, size, loaderColor, backgroundColor }) => {
  const key = `pulse${duration}${size}`;

  return loading ? (
    <StyleRoot key={key} style={{width: '100%', height: '100%'}}>
      <PulseDetail loaderColor={loaderColor} backgroundColor={backgroundColor}
        duration={duration} size={size} />
    </StyleRoot>
  ) : children
}

export default Pulse;
