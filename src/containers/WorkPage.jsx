import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import CaseStudyThumbnail from './CaseStudyThumbnail';
import ResumeLink from '../components/ResumeLink';

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
					<div className="headline-container">
						<h1 className="headline">
							I'm a technical designer passionate about
							understanding how others think and feel. I enjoy
							using design to find deeper meaning in what it is to
							be human.
						</h1>
					</div>
					<div className="flex-container">
						{projects.map(project => (
							<CaseStudyThumbnail
								key={project.id}
								project={project}
							/>
						))}
					</div>
					<ResumeLink />
				</div>
			</main>
		);
	}
}
