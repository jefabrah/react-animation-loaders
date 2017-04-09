import React from 'react';
import { StyleRoot } from 'radium';
import AMCDotsDetail from './AMCDotsDetail';

const AMCDots = ({ loading, children }) => (

  <StyleRoot>
    <AMCDotsDetail loading={loading}>
      {children}
    </AMCDotsDetail>
  </StyleRoot>

)

export default AMCDots;
