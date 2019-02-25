import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import ImageLightbox from './ImageLightbox';
import CaseStudyContent from './CaseStudyContent/CaseStudyContainer';
import CaseStudyNavigation from './CaseStudyNavigation';
import ResumeLink from '../components/ResumeLink';

@inject('actions', 'workStore')
@observer
class CaseStudyPage extends React.Component {
	async componentDidMount() {
		const { match, workStore } = this.props;
		const { projectId } = match.params;
		let projectIds = workStore.projects.map(project => project.id);

		if (projectIds.length === 0) {
			const projects = await this.props.actions.fetchProjects();
			projectIds = projects.map(project => project.id);
		}

		if (projectIds.includes(projectId)) {
			this.props.actions.getProjectById(projectId, workStore);
		} else {
			console.log('redirect to 404 page');
		}
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
				<ImageLightbox />
				<CaseStudyContent />
				<CaseStudyNavigation />
				<ResumeLink />
			</main>
		);
	}
}

export default withRouter(CaseStudyPage);
