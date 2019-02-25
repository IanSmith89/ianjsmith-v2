import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import actions from './actions';
import stores from './stores';
import Container from './containers/Container';

const App = () => {
	return (
		<Router>
			<Provider actions={actions} {...stores}>
				<Container />
			</Provider>
		</Router>
	);
};

export default App;
