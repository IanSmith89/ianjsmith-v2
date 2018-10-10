'use strict';

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config({ silent: true });
}

const path = require('path');
const fs = require('fs');
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const compression = require('compression');

const app = express();

app.use(compression());
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

const PROXY = 8000;
let PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
	console.log('***********************************************************');
	console.log('NODE_ENV is development --> Using Webpack Middleware');
	console.log('***********************************************************');

	const webpack = require('webpack');
	const WebpackDevServer = require('webpack-dev-server');
	const config = require('../webpack.config');

	new WebpackDevServer(webpack(config), {
		historyApiFallback: true,
		hot: true,
		proxy: {
			'/api': `http://localhost:${PROXY}`
		},
		publicPath: config.output.publicPath
	}).listen(PORT, 'localhost', function(err, result) {
		if (err) return console.log(err);
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
	res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
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

app.listen(PORT, () => {
	if (process.env.NODE_ENV === 'development') {
		// eslint-disable-next-line no-console
		console.log(`listening on localhost:${PORT}`);
	}

	if (process.env.NODE_ENV === 'production') {
		console.log('listening on PORT', PORT);
	}
});

module.exports = app;
