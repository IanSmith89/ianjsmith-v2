import React from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import Astarte from './projectContent/Astarte';
import GigPosters from './projectContent/GigPosters';
import WAStateParks from './projectContent/WAStateParks';

@observer
export default class ProjectContent extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<Switch>
				<Route
					path="/projects/astarte"
					component={() => <Astarte project={project} />}
				/>
				<Route
					path="/projects/ecommerce"
					component={() => <ECommerce project={project} />}
				/>
				<Route
					path="/projects/mightyvet"
					component={() => <MightyVet project={project} />}
				/>
				<Route
					path="/projects/posters"
					component={() => <GigPosters project={project} />}
				/>
				<Route
					path="/projects/wasp"
					component={() => <WAStateParks project={project} />}
				/>
			</Switch>
		);
	}
}
