import React from 'react';
import { ChromePicker } from 'react-color';

const LoaderColor = ({ setColor, color }) => {
  return <ChromePicker color={ color }
        onChange={ setColor }/>
}

export default LoaderColor;
