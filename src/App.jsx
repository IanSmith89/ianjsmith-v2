import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import actions from './actions';
import stores from './stores';
import Nav from './containers/Nav';
import Container from './containers/Container';
import Footer from './containers/Footer';

const App = () => {
	return (
		<Router>
			<Provider actions={actions} {...stores}>
				<div>
					<Nav />
					<Container />
					<Footer />
				</div>
			</Provider>
		</Router>
	);
};

export default App;
