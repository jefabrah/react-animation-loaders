import React from 'react';
import { ChromePicker } from 'react-color';

const BackgroundColor = ({ setColor, color }) => {
  return <ChromePicker color={ color }
        onChangeComplete={ setColor }/>
}

export default BackgroundColor;
