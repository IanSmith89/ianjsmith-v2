import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ProjectLink from './ProjectLink';

@inject('actions', 'workStore')
@observer
export default class WorkPage extends React.Component {
	componentDidMount() {
		this.props.actions.getProjects(this.props.workStore);
	}

	render() {
		const { projects } = this.props.workStore;

		return (
			<main className="home page">
				<div className="container">
					<div className="flex-container">
						{projects.map(project => (
							<ProjectLink key={project.id} project={project} />
						))}
					</div>
				</div>
			</main>
		);
	}
}
