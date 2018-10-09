import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import ProjectHeader from '../components/ProjectHeader';
import ImageCard from '../components/ImageCard';
import ProjectDetails from '../components/ProjectDetails';
import ProjectContent from './ProjectContent';
import ProjectControls from './ProjectControls';
import ResumeLink from '../components/ResumeLink';

@inject('actions', 'workStore')
@observer
class ProjectPage extends React.Component {
	constructor(props) {
		super(props);

		this.actions = props.actions;
		this.projectId = props.match.params.projectId;
		this.workStore = props.workStore;
	}

	componentDidMount() {
		this.actions.getProjectById(this.projectId);
	}

	componentWillUpdate(nextProps) {
		if (this.projectId !== nextProps.match.paramsprojectId) {
			this.projectId = nextProps.match.paramsprojectId;
			window.scrollTo(0, 0);
		}
	}

	componentWillUnmount() {
		this.actions.clearProject();
	}

	render() {
		const { project } = this.workStore;

		return (
			<main id="project-top" className="project page">
				<div className="container">
					<ProjectHeader project={project} />
					<ImageCard
						alt="project screenshot"
						src={
							project.id
								? require(`../assets/images/${
										project.id
								  }-cover.jpg`)
								: undefined
						}
					/>
					<ProjectDetails project={project} />
				</div>
				<ProjectContent project={project} />
				<ProjectControls />
				<ResumeLink />
			</main>
		);
	}
}

export default withRouter(ProjectPage);
