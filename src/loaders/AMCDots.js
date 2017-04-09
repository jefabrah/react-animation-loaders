import React from 'react';
import { StyleRoot } from 'radium';
import AMCDotsDetail from './AMCDotsDetail';

const AMCDots = ({ loading, children, duration }) => (

  <StyleRoot>
    <AMCDotsDetail loading={loading}
      duration={duration}>
      {children}
    </AMCDotsDetail>
  </StyleRoot>

)

export default AMCDots;
