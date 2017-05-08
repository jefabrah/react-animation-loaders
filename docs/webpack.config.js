const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.loaders');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
		fallback: 'style-loader', 
		use : 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]'
	}),
  exclude: ['node_modules']
});

module.exports = [
  {
    cache: true,
    entry: '../loaders/index.js',
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
      path: path.join(__dirname, 'lib'),
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
  {
    entry: [
      './src/index.js',
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    output: {
      publicPath: '/',
      filename: 'main.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders
    },
    devServer: {
      contentBase: "./",
      // do not print bundle build stats
      noInfo: true,
      // enable HMR
      hot: true,
      // embed the webpack-dev-server runtime into the bundle
      inline: true,
      // serve index.html in place of 404 responses to allow HTML5 history
      historyApiFallback: true,
      port: PORT,
      host: HOST
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin({
        filename: 'style.css',
        allChunks: true
      }),
      new DashboardPlugin(),
    ]
  },
]
