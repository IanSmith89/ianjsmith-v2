import React from 'react';
import { observer } from 'mobx-react';
import CaseStudyHero from '../../components/CaseStudyHero';

@observer
export default class CaseStudy extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<div>
				<CaseStudyHero project={project} />
				<div className="container">
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">The Problem</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							<p className="section-content">{project.problem}</p>
						</div>
					</div>
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">Team & Role</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							<p className="section-content">
								{project.teamAndRole}
							</p>
						</div>
					</div>
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">The Solution</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							<p className="section-content">
								{project.solution}
							</p>
						</div>
					</div>
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">Design Process</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							{project.designProcess &&
								project.designProcess.map((p, i) => {
									return (
										<p className="section-content" key={i}>
											{p}
										</p>
									);
								})}
						</div>
					</div>
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">
								Outcome & Reflection
							</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							{project.outcomeAndReflection &&
								project.outcomeAndReflection.map((p, i) => {
									return (
										<p className="section-content" key={i}>
											{p}
										</p>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
