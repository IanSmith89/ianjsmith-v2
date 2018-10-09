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
import Dash from './projectContent/Dash';
import DowntownArtery from './projectContent/DowntownArtery';
import DreamStream from './projectContent/DreamStream';
import Paragon from './projectContent/Paragon';
import Salvage from './projectContent/Salvage';
import Topshelf from './projectContent/Topshelf';
import WAStateParks from './projectContent/WAStateParks';

@observer
export default class ProjectPage extends React.Component {
	constructor(props) {
		super(props);

		this.projectId = props.match.params.projectId;
	}

	componentDidMount() {
		this.props.actions.getProjectById(this.projectId);
	}

	componentWillUpdate(nextProps) {
		const { projectId } = nextProps.match.params;

		if (projectId !== this.projectId) {
			this.projectId = projectId;
			this.props.actions.getProjectById(this.projectId);
			window.scrollTo(0, 0);
		}
	}

	componentWillUnmount() {
		this.props.actions.clearProject();
	}

	projectContent() {
		const { project } = this.props.stores.workStore;
		const contents = {
			astarte: <Astarte project={project} />,
			'cheba-hut': <ChebaHut project={project} />,
			dash: <Dash project={project} />,
			posters: <DowntownArtery project={project} />,
			dreamstream: <DreamStream project={project} />,
			paragon: <Paragon project={project} />,
			salvage: <Salvage project={project} />,
			topshelf: <Topshelf project={project} />,
			wasp: <WAStateParks project={project} />
		};

		return contents[this.projectId];
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
				{this.projectContent()}
				<ProjectControls activePathname={activePathname} />
				<ResumeLink />
			</main>
		);
	}
}
