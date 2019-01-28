import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ArrowIcon from '../../components/ArrowIcon';

@observer
export default class Astarte extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<div>
				<div className="row">
					<div className="twelve columns">
						<div className="case-study-header astarte">
							<div className="dark-overlay">
								<div className="container">
									<div className="back-link">
										<Link to="/">
											<ArrowIcon />
											all work
										</Link>
									</div>
									<h1 className="case-study-name">
										{project.name}
									</h1>
									<div className="underline" />
									<h2 className="case-study-description">
										{project.description}
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
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
