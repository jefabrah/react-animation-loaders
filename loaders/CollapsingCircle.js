import React from 'react';
import { StyleRoot } from 'radium';
import CollapsingCircleDetail from './CollapsingCircleDetail';

const CollapsingCircle = ({ loading, children, duration, size, loaderColor, backgroundColor, isFixed }) => {
  const key = `CollapsingCircle${duration}${size}`;

  return loading ? (
    <StyleRoot key={key} style={{width: '100%', height: '100%'}}>
      <CollapsingCircleDetail loaderColor={loaderColor} backgroundColor={backgroundColor}
        duration={duration} size={size} isFixed={isFixed} />
    </StyleRoot>
  ) : children
}

export default CollapsingCircle;
