import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import LazyRoute from 'lazy-route';

import Nav from './Nav';

@observer
export default class App extends Component {
	constructor(props) {
		super(props);

		this.actions = props.actions;
		this.stores = props.stores
	}

	render() {
		return (
			<Router>
				<Provider {...this.stores}>
					<div className="wrapper">
						<Nav />
						<Route
							exact
							path="/"
							render={props => (
								<LazyRoute
									{...props}
									actions={this.actions}
									component={import('./WorkPage')}
								/>
							)}
						/>
						<Route
							exact
							path="/about"
							render={props => (
								<LazyRoute
									{...props}
									actions={this.actions}
									component={import('./AboutPage')}
								/>
							)}
						/>
						<Route
							exact
							path="/projects/:projectId"
							render={props => (
								<LazyRoute
									{...props}
									actions={this.actions}
									component={import('./ProjectPage')}
								/>
							)}
						/>
					</div>
				</Provider>
			</Router>
		)
	}
}
