import React from 'react';
import { StyleRoot } from 'radium';
import PulseDetail from './PulseDetail';

const Pulse = ({ loading, children, duration }) => (

  <StyleRoot>
    <PulseDetail loading={loading}
      duration={duration}>
      {children}
    </PulseDetail>
  </StyleRoot>

)

export default Pulse;
