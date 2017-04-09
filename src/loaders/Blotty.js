import React from 'react';
import { StyleRoot } from 'radium';
import BlottyDetail from './BlottyDetail';

const Blotty = ({ loading, children }) => (

  <StyleRoot>
    <BlottyDetail loading={loading}>
      {children}
    </BlottyDetail>
  </StyleRoot>

)

export default Blotty;
