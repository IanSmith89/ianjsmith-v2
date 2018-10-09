import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
require('./assets/styles/main.scss');

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		ReactDOM.render(
			<AppContainer>
				<App />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}
