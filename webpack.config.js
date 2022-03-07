const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const pluginsDefine = isProduction
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
	: [];

module.exports = {
	entry: {
		vendor: ['react', 'react-dom', 'react-router'],
		app: ['babel-polyfill', './src/index.js']
	},
	output: {
		filename: 'static/js/[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/images/[contenthash].[ext]'
	},
	mode: process.env.NODE_ENV,
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.js|.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss|css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					'postcss-loader',
					'resolve-url-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: pluginsDefine.concat([
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
	])
};
