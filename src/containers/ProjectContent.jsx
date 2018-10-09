import React from 'react';
import { observer } from 'mobx-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Astarte from './projectContent/Astarte';
import ChebaHut from './projectContent/ChebaHut';
import Dash from './projectContent/Dash';
import DowntownArtery from './projectContent/DowntownArtery';
import DreamStream from './projectContent/DreamStream';
import Paragon from './projectContent/Paragon';
import Salvage from './projectContent/Salvage';
import Topshelf from './projectContent/Topshelf';
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
					path="/projects/cheba-hut"
					component={() => <ChebaHut project={project} />}
				/>
				<Route
					path="/projects/dash"
					component={() => <Dash project={project} />}
				/>
				<Route
					path="/projects/posters"
					component={() => <DowntownArtery project={project} />}
				/>
				<Route
					path="/projects/dreamstream"
					component={() => <DreamStream project={project} />}
				/>
				<Route
					path="/projects/paragon"
					component={() => <Paragon project={project} />}
				/>
				<Route
					path="/projects/salvage"
					component={() => <Salvage project={project} />}
				/>
				<Route
					path="/projects/topshelf"
					component={() => <Topshelf project={project} />}
				/>
				<Route
					path="/projects/wasp"
					component={() => <WAStateParks project={project} />}
				/>
			</Switch>
		);
	}
}
