import React, { Component } from 'react';


class Blotty extends Component {

  componentDidMount() {
    let head = document.head || document.getElementsByTagName('head')[0],
    styleTag = document.createElement('style')
    styleTag.type = 'text/css';
    
    const keyframes =
    `@-webkit-keyframes blottyLR {
      25%, 75% { transform: translateX(5rem) scale(0.75); }
      95% { transform: translateX(0rem) scale(1); }
    }
    
    @-webkit-keyframes blottyLL {
      25%, 75% { transform: translateX(-5rem) scale(0.75); }
      95% { transform: translateX(0rem) scale(1); }
    }
    
    @-webkit-keyframes blottyMR {
      25% { transform: translateX(5rem) scale(0.75); }
      50%, 75% { transform: translateX(15rem) scale(0.6); }
      95% { transform: translateX(0rem) scale(1); }
    }
    
    @-webkit-keyframes blottyML {
      25% { transform: translateX(-5rem) scale(0.75); }
      50%, 75% { transform: translateX(-15rem) scale(0.6); }
      95% { transform: translateX(0rem) scale(1); }
    }
    
    @-webkit-keyframes blottySR {
      25% { transform: translateX(5rem) scale(0.75); }
      50% { transform: translateX(15rem) scale(0.6); }
      75% { transform: translateX(22rem) scale(0.5); }
      95% { transform: translateX(0rem) scale(1); }
    }

    @-webkit-keyframes blottySL {
      25% { transform: translateX(-5rem) scale(0.75); }
      50% { transform: translateX(-15rem) scale(0.6); }
      75% { transform: translateX(-22rem) scale(0.5); }
      95% { transform: translateX(0rem) scale(1); }
    }

    
    `;

    if (styleTag.styleSheet) {
      styleTag.styleSheet.cssText = keyframes
    } else {
      styleTag.appendChild(document.createTextNode(keyframes))
    }
    head.appendChild(styleTag)
  }
  

  render() {
    const styleBlottyLR = {
      transformOrigin: '50% 50%',
      animation: 'blottyLR 1.5s infinite ease-in-out',
      fill: '#878787'
    };

    const styleBlottyLL = {
      transformOrigin: '50% 50%',
      animation: 'blottyLL 1.5s infinite ease-in-out',
      fill: '#878787'
    };

    const styleBlottyMR = {
      transformOrigin: '50% 50%',
      animation: 'blottyMR 1.5s infinite ease-in-out',
      fill: '#878787'
    };

    const styleBlottyML = {
      transformOrigin: '50% 50%',
      animation: 'blottyML 1.5s infinite ease-in-out',
      fill: '#878787'
    };

    const styleBlottySR = {
      transformOrigin: '50% 50%',
      animation: 'blottySR 1.5s infinite ease-in-out',
      fill: '#878787'
    };

    const styleBlottySL = {
      transformOrigin: '50% 50%',
      animation: 'blottySL 1.5s infinite ease-in-out',
      fill: '#878787'
    };

    return (
      <div>
        <svg style={{ width: '500px', height: '100px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1289 213">
          <circle  id="blottyLR"  style={ styleBlottyLR } cx="644.5" cy="106.5" r="76.5"/>
          <circle  id="blottyLL" style={ styleBlottyLL } cx="644.5" cy="106.5" r="76.5"/>
          <circle  id="blottyMR" style={ styleBlottyMR } cx="644.5" cy="106.5" r="54.5"/>
          <circle  id="blottyML" style={ styleBlottyML } cx="644.5" cy="106.5" r="54.5"/>
          <circle  id="blottySL" style={ styleBlottySR } cx="644.5" cy="106.5" r="33.5"/>
          <circle  id="blottySR" style={ styleBlottySL } cx="644.5" cy="106.5" r="33.5"/>
        </svg>
      </div>
      
    )
  }
}

export default Blotty;