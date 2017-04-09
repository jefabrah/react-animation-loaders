import Radium from 'radium';

const ConfiguredRadium = (component) => (
  Radium({
    plugins: [
      Radium.Plugins.keyframes,
      Radium.Plugins.prefix,
      Radium.Plugins.checkProps
    ],
  })(component)
)

export default ConfiguredRadium;
