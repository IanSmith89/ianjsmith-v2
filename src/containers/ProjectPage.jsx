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
	componentDidMount() {
		const { projectId } = this.props.match.params;
		this.props.actions.getProjectById(projectId, this.props.workStore);
	}

	componentDidUpdate(prevProps) {
		const { projectId } = this.props.match.params;

		if (projectId !== prevProps.match.params.projectId) {
			this.props.actions.clearProject(this.props.workStore);
			this.props.actions.getProjectById(projectId, this.props.workStore);
		}
	}

	render() {
		return (
			<main id="project-top" className="case-study page">
				<ProjectContent />
				<ProjectControls />
				<ResumeLink />
			</main>
		);
	}
}

export default withRouter(ProjectPage);
