import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './assets/styles/main.scss';
import 'react-image-lightbox/style.css';

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
