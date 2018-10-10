'use strict';

require('babel-core/polyfill');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config({ silent: true });
}

const path = require('path');
const fs = require('fs');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../src/App.jsx');
const express = require('express');

const defaultServerPort = 3000;
const devServerPort = 8000;
const webpackServerPort = defaultServerPort;
let expressServerPort = process.env.PORT || defaultServerPort;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

const compression = require('compression');
app.use(compression());

const routes = require('./routes');

app.disable('x-powered-by');

switch (app.get('env')) {
	case 'development':
		app.use(morgan('dev'));
		break;

	case 'production':
		app.use(morgan('short'));
		break;

	default:
}

if (process.env.NODE_ENV === 'development') {
	console.log('NODE_ENV is development *********** Using Webpack Middleware');
	console.log('***********************************************************');
	expressServerPort = devServerPort;
	const webpack = require('webpack');
	const WebpackDevServer = require('webpack-dev-server');
	const config = require('../webpack.config');

	new WebpackDevServer(webpack(config), {
		publicPath: config[1].output.publicPath,
		hot: true,
		historyApiFallback: true,
		proxy: {
			'/api': `http://localhost:${expressServerPort}`
		}
	}).listen(webpackServerPort, 'localhost', function(err, result) {
		if (err) {
			return console.log(err);
		}
	});
}

// CSRF protection
app.use('/api', (req, res, next) => {
	if (/json/.test(req.get('Accept'))) {
		return next();
	}

	res.sendStatus(406);
});

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', routes);
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/*', (_req, res) => {
	const app = ReactDOMServer.renderToString(<App />);
	const indexFile = path.resolve(__dirname, '..', 'dist', 'index.html');

	fs.readFile(indexFile, 'utf8', (err, data) => {
		if (err) {
			console.error('Something went wrong:', err);
			return res.status(500).send('Oops, better luck next time!');
		}

		return res.send(
			data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
		);
	});
});

app.use((_req, res) => {
	res.sendStatus(404);
});

// eslint-disable-next-line max-params
app.use((err, _req, res, _next) => {
	if (err.message === 'EmptyResponse') {
		return res.sendStatus(404);
	}

	if (err.status || (err.output && err.output.statusCode)) {
		return res.status(err.status || err.output.statusCode).send(err);
	}

	// eslint-disable-next-line no-console
	console.error(err.stack);
	res.sendStatus(500);
});

app.listen(expressServerPort, () => {
	if (process.env.NODE_ENV === 'development') {
		// eslint-disable-next-line no-console
		console.log(`API proxy running on localhost:${expressServerPort}`);
		console.log(`app running on localhost:${webpackServerPort}`);
	}
});

module.exports = app;
