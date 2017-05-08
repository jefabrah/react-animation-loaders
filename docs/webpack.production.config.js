var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
		fallback: 'style-loader', 
		use : 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]'
	}),
  exclude: ['node_modules']
});

module.exports = {
	entry: [
		'./src/index.js',
		'./src/index.css'
	],
	output: {
		publicPath: './',
		path: path.join(__dirname, 'public'),
		filename: 'index.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new ExtractTextPlugin({
				filename: 'index.css',
				allChunks: true
		}),
	]
};
