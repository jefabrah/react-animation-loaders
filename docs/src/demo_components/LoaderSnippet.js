import React from 'react';
import getDefaultDuration from './get_default_duration';
import getDefaultLoaderColors from './get_default_loader_colors';

const LoaderSnippet = ({ name, duration, size, loaderColor, backgroundColor, isFixed }) => {
  // size
  if (size && size !== 'md') {
    size = ` size={'${size}'} `
  }
  else {
    size = '';
  }
  // duration
  if (duration && Number(duration) !== getDefaultDuration(name)) {
    duration = ` duration={${duration}} `;
  }
  else {
    duration = '';
  }
  // fixed
  if (isFixed === 'false') {
    isFixed = ` isFixed={false} `;
  }
  else {
    isFixed = '';
  }
  // loader color
  if (loaderColor !== getDefaultLoaderColors(name)[0]) {
    loaderColor = ` loaderColor={'${loaderColor}'} `;
  }
  else {
    loaderColor = '';
  }
  // background color
  if (backgroundColor && backgroundColor !== '#ffffff') {
    backgroundColor = ` backgroundColor={'${backgroundColor}'}`;
  }
  else {
    backgroundColor = '';
  }
  
  const lineOneBreak = loaderColor || backgroundColor ? '\n' : '';

  const componentSnippet = 
      `import { ${name} } from 'react-animation-loaders';
      
      \n<${name} loading={true} ${isFixed}${duration}${size}${lineOneBreak}${loaderColor}${backgroundColor}>

    // your loading content \n\n</${name}>`;

  return (
    <div className="loader-snippet" >
      <div className="snippet-install">
        <pre>npm install react-animation-loaders --save</pre>
      </div>
      <div className="snippet-component">
        <pre>{componentSnippet}</pre>
      </div>
    </div>
  )
}

export default LoaderSnippet;
