import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

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
							<div
								className="project-link-container"
								key={project.id}
							>
								<Link
									className="project-link"
									to={`/projects/${project.id}`}
								>
									<div className="project-image-container">
										<div className="hover-overlay">
											<h1 className="hover-project-name">
												{project.name}
											</h1>
										</div>
										<img
											className="project-image"
											src={require(`../assets/images/${
												project.id
											}-cover.jpg`)}
											alt="project"
										/>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</main>
		);
	}
}
