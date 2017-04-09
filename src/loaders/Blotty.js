import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import BlottyDetail from './BlottyDetail';

class Blotty extends Component {
  //  = ({ loading, children, duration })

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { loading, children, duration } = this.props;
    console.log(typeof duration)
    return(

      <StyleRoot>
        <BlottyDetail loading={loading}
          duration={duration}>
          {children}
        </BlottyDetail>
      </StyleRoot>

    )
  }
 }

export default Blotty;
