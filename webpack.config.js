var path = require('path');
var webpack = require('webpack');

module.exports = [
  // distribution
  {
    cache: true,
    entry: path.join(__dirname, '/loaders/index.js'),
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
      path: __dirname,
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
  },
  // doc/dev
  {
    cache: true,
    entry: path.join(__dirname, '/loaders/index.js'),
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
      path: path.join(__dirname, '/docs/src/lib/'),
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
