import React, { Component } from 'react';
import reveal from '../animations/reveal';


class BoxReveal extends Component {
  constructor (props) {
    super(props);
    this.childRefs = [];
    this.revealed = false;
    this.children = [];
    this.state = {
      childWidth: 0,
      childHeight: 0,

    }
  }

  componentDidMount() {
    let childHeight = 0, 
        childWidth = 0;

    this.children = this.childRefs.map( (ref) => {
      childHeight = this.refs[ref].scrollHeight;
      childWidth = this.refs[ref].scrollWidth;
      return this.refs[ref]
    })

    this.setState({
      childHeight,
      childWidth
    })
    
  }

  componentWillUpdate() {
    if (!this.revealed) {
      this.revealed = true;

      const delay = this.props.delay;
      const duration = this.props.duration;
      const box = this.refs.revealbox;
      const direction = this.props.direction;

      const options = {
        delay,
        duration,
        direction
      }

      reveal(box, this.children, options);
    }
  }

  render() {
    const { childHeight, childWidth } = this.state;
    const hasChildDimensions = childHeight !== 0 && childWidth !== 0;
    const containerStyle = {
      position: 'relative',
      margin: '0px',
      overflow: 'hidden',
      display: 'block',
      opacity:  hasChildDimensions ? 1 : 0,
      width:    hasChildDimensions ? childWidth : '100%',
      height:   hasChildDimensions ? childHeight : '100%',
    }

    const boxStyle = {
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: this.props.color,
      zIndex: 2
    };

    
    return (
      <div style={containerStyle}>

      {React.Children.map(this.props.children, (element, idx) => {
        const ref = idx + this.props.name;
        this.childRefs.push(ref);
        return React.cloneElement(element,{ ref, style: { opacity: 0 } });
      })}
      <div 
        ref="revealbox"
        style={boxStyle}/>
      </div>
    )
  }
};

export default BoxReveal;