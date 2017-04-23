import React from 'react';
import { StyleRoot } from 'radium';
import GSpinnerDetail from './GSpinnerDetail';

const GSpinner = ({ loading, children, duration, size, loaderColor, backgroundColor }) => {
  const key = `GSpinner${duration}${size}`;

  return loading ? (
    <StyleRoot key={key} style={{width: '100%', height: '100%'}}>
      <GSpinnerDetail loaderColor={loaderColor} backgroundColor={backgroundColor}
        duration={duration} size={size} />
    </StyleRoot>
  ) : children
}

export default GSpinner;
