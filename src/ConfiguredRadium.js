import Radium from 'radium';

const styleLogger = ({componentName, style}) => {
  console.log('Name: ' + componentName, style);
}

const ConfiguredRadium = (component) => (
  Radium({
    plugins: [
      Radium.Plugins.keyframes,
      Radium.Plugins.prefix,
      styleLogger
    ],
  })(component)
)

export default ConfiguredRadium;