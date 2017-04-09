import React from 'react';
import { StyleRoot } from 'radium';
import PulseDetail from './PulseDetail';

const Pulse = ({ loading, children }) => (

  <StyleRoot>
    <PulseDetail loading={loading}>
      {children}
    </PulseDetail>
  </StyleRoot>

)

export default Pulse;
