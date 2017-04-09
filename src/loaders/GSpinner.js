import React from 'react';
import { StyleRoot } from 'radium';
import GSpinnerDetail from './GSpinnerDetail';

const GSpinner = ({ loading, children }) => (
    
  <StyleRoot>
    <GSpinnerDetail loading={loading}>
      {children}
    </GSpinnerDetail>
  </StyleRoot>
)

export default GSpinner;
