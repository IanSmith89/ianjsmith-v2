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
		this.workStore = props.workStore;
	}

	componentDidMount() {
		const { projectId } = this.props.match.params;
		this.actions.getProjectById(projectId, this.workStore);
	}

	componentDidUpdate(prevProps) {
		const { projectId } = this.props.match.params;

		if (projectId !== prevProps.match.params.projectId) {
			this.actions.clearProject(this.workStore);
			this.actions.getProjectById(projectId, this.workStore);
		}
	}

	render() {
		const { project } = this.workStore;

		return (
			<main id="project-top" className="case-study page">
				<ProjectContent project={project} />
				<ProjectControls />
				<ResumeLink />
			</main>
		);
	}
}

export default withRouter(ProjectPage);
