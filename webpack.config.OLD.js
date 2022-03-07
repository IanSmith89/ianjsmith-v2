var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';
var pluginsDefine = isProduction
	? [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production')
				}
			}),
			new webpack.optimize.OccurrenceOrderPlugin(true),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor',
				minChunks: Infinity
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				},
				sourceMap: false
			})
	  ]
	: [new webpack.HotModuleReplacementPlugin()];

module.exports = {
	entry: isProduction
		? {
				vendor: ['react', 'react-dom', 'react-router'],
				app: ['babel-polyfill', './src/index.js']
		  }
		: [
				'react-hot-loader/patch',
				'babel-polyfill',
				'whatwg-fetch',
				'webpack-dev-server/client?http://localhost:3000',
				'webpack/hot/only-dev-server',
				'./src/index'
		  ],
	output: {
		chunkFilename: isProduction ? 'static/js/[name].[chunkhash].js' : '',
		filename: 'static/js/[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		assetModuleFilename: 'assets/images/[contenthash][ext]'
	},
	devtool: isProduction ? 'cheap-module-source-map' : 'eval',
	module: {
		loaders: [
			{
				test: /\.js|.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [['env', { modules: false }], 'stage-0', 'react'],
					plugins: [
						'transform-async-to-generator',
						'transform-decorators-legacy',
						'autobind-class-methods'
					]
				}
			},
			{
				test: /\.scss|css$/,
				loader:
					'style-loader!css-loader!postcss-loader!resolve-url-loader!sass-loader?sourceMap'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset/resource'
			}
		]
	},
	node: {
		fs: 'empty',
		net: 'empty'
	},
	plugins: pluginsDefine.concat([
		new ExtractTextPlugin('assets/styles/styles.css'),
		new HtmlWebpackPlugin({
			favicon: './favicon.ico',
			hash: false,
			template: './index.hbs'
		}),
		new webpack.LoaderOptionsPlugin({
			test: /\.scss$/,
			debug: true,
			options: {
				postcss: function() {
					return [precss, autoprefixer];
				},
				context: path.join(__dirname, 'src'),
				output: {
					path: path.join(__dirname, 'dist')
				}
			}
		})
	]),
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
