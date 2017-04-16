import React from 'react';
import { StyleRoot } from 'radium';
import GSpinnerDetail from './GSpinnerDetail';

const GSpinner = ({ loading, children, duration, size }) => {
  const key = `GSpinner${duration}${size}`;

  return (
    <StyleRoot key={key}>
      <GSpinnerDetail loading={loading}
        duration={duration} size={size}>
        {children}
      </GSpinnerDetail>
    </StyleRoot>
  )
}

export default GSpinner;
