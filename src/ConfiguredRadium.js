import Radium from 'radium';

const ConfiguredRadium = (component) => (
  Radium({
    plugins: [
      Radium.Plugins.keyframes,
      Radium.Plugins.prefix,
    ],
  })(component)
)

export default ConfiguredRadium;
