import React from 'react';
import { StyleRoot } from 'radium';
import GSpinnerDetail from './GSpinnerDetail';

const GSpinner = ({ loading, children, duration }) => (
    
  <StyleRoot>
    <GSpinnerDetail loading={loading}
      duration={duration}>
      {children}
    </GSpinnerDetail>
  </StyleRoot>
)

export default GSpinner;
