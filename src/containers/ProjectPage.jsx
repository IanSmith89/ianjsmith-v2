import React from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import ProjectHeader from '../components/ProjectHeader';
import ImageCard from '../components/ImageCard';
import ProjectDetails from '../components/ProjectDetails';
import ProjectControls from '../components/ProjectControls';
import ResumeLink from '../components/ResumeLink';
import Astarte from './projectContent/Astarte';
import ChebaHut from './projectContent/ChebaHut';
import DowntownArtery from './projectContent/DowntownArtery';
import DreamStream from './projectContent/DreamStream';
import Paragon from './projectContent/Paragon';
import Salvage from './projectContent/Salvage';
import Topshelf from './projectContent/Topshelf';

@observer
export default class ProjectPage extends React.Component {
	componentDidMount() {
		const { projectId } = this.props.match.params;

		this.props.actions.getProjectById(projectId);
	}

	componentWillUpdate(nextProps) {
		const { projectId } = nextProps.match.params;

		if (projectId !== this.props.stores.workStore.project.id) {
			this.props.actions.getProjectById(projectId);
			window.scrollTo(0, 0);
		}
	}

	componentWillUnmount() {
		this.props.actions.clearProject();
	}

	renderProjectContent() {
		const { projectId } = this.props.match.params;
		const { project } = this.props.stores.workStore;
		const contents = {
			astarte: <Astarte project={project} />,
			'cheba-hut': <ChebaHut project={project} />,
			'downtown-artery': <DowntownArtery project={project} />,
			'dream-stream': <DreamStream project={project} />,
			paragon: <Paragon project={project} />,
			salvage: <Salvage project={project} />,
			topshelf: <Topshelf project={project} />
		};

		return contents[projectId];
	}

	render() {
		const { activePathname } = this.props.stores.appStore;
		const { project } = this.props.stores.workStore;

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
				{this.renderProjectContent()}
				<ProjectControls activePathname={activePathname} />
				<ResumeLink />
			</main>
		);
	}
}
