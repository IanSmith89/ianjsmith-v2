import React from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import Astarte from './projectContent/Astarte';
import MightyVet from './projectContent/MightyVet';
import GigPosters from './projectContent/GigPosters';
import WAStateParks from './projectContent/WAStateParks';
import CaseStudy from './projectContent/CaseStudy';

@observer
export default class ProjectContent extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<Switch>
				<Route
					path="/projects/astarte"
					component={() => <CaseStudy project={project} />}
				/>
				<Route
					path="/projects/ecommerce"
					component={() => <CaseStudy project={project} />}
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
					component={() => <CaseStudy project={project} />}
				/>
			</Switch>
		);
	}
}
