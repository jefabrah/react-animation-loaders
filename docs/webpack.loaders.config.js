var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
    cache: true,
    entry: "../loaders/index.js",
    devtool: 'cheap-module-eval-source-map',
    externals: [
      {
        "react": {
          root: "React",
          commonjs2: "react",
          commonjs: "react",
          amd: "react"
        }
      }
    ],
    output: {
      path: path.join(__dirname, 'src/lib/'),
      filename: 'index.js',
      library: 'ReactAnimationLoaders',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        }
      ]
    }
  }
]
