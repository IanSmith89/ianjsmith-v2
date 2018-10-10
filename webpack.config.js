var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

var isProduction = process.env.NODE_ENV === 'production';
var productionPluginDefine = isProduction
	? [
			new webpack.DefinePlugin({
				'process.env': { NODE_ENV: JSON.stringify('production') }
			})
	  ]
	: [];
var clientLoaders = isProduction
	? productionPluginDefine.concat([
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
	  ])
	: [
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/)
	  ];
var commonLoaders = [
	{
		test: /\.js|.jsx$/,
		exclude: /node_modules/,
		loader: 'babel-loader',
		query: {
			presets: [['env', { modules: false }], 'stage-0', 'react'],
			plugins: [
				'transform-async-to-generator',
				'transform-decorators-legacy'
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
		loaders: [
			'file-loader?hash=sha512&digest=hex&name=assets/images/[hash].[ext]',
			'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
		]
	}
];
var resolve = {
	extensions: ['.js', '.jsx']
};
var clientEntryDefine = isProduction
	? {
			vendor: ['react', 'react-dom', 'react-router'],
			app: ['babel-polyfill', './src/index.js']
	  }
	: ['react-hot-loader/patch', 'babel-polyfill', './src/index.js'];

module.exports = [
	{
		name: 'server',
		entry: ['babel-polyfill', './server/index.js'],
		output: {
			filename: 'server.js',
			libraryTarget: 'commonjs2',
			path: path.join(__dirname, 'dist'),
			publicPath: '/'
		},
		target: 'node',
		node: {
			console: false,
			global: false,
			process: false,
			Buffer: false,
			__filename: false,
			__dirname: false
		},
		externals: nodeExternals(),
		plugins: productionPluginDefine,
		module: {
			loaders: commonLoaders
		},
		resolve
	},
	{
		name: 'client',
		entry: clientEntryDefine,
		output: {
			chunkFilename: 'static/js/[name].[chunkhash].js',
			filename: 'static/js/[name].[hash].js',
			path: path.join(__dirname, 'dist'),
			publicPath: '/'
		},
		module: {
			loaders: commonLoaders
		},
		node: {
			fs: 'empty',
			net: 'empty'
		},
		plugins: clientLoaders.concat([
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
		resolve
	}
];
