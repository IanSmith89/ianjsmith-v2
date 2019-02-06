import React from 'react';
import { observer } from 'mobx-react';
import CaseStudyHero from '../../components/CaseStudyHero';
import ImageCard from '../../components/ImageCard';

@observer
export default class MightyVet extends React.Component {
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
					{project.designProcess && (
						<div className="text-section">
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Design Process
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Heuristic Review
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet Heuristic Analysis"
										src={require('../../assets/images/MightyVet-heuristic.png')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[0]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Competitive Analysis
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="four columns">
									<ImageCard
										alt="Vet Mind Matters logo"
										src={require('../../assets/images/VetMindMatters-logo.jpg')}
									/>
								</div>
								<div className="four columns">
									<ImageCard
										alt="iMentor logo"
										src={require('../../assets/images/iMentor-logo.jpg')}
									/>
								</div>
								<div className="four columns">
									<ImageCard
										alt="Feeding America logo"
										src={require('../../assets/images/FeedingAmerica-logo.jpg')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[1]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Information Architecture
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet Sitemap"
										src={require('../../assets/images/MightyVet-sitemap.jpg')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[2]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Sketching & Prototyping
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet Sketches"
										src={require('../../assets/images/MightyVet-sketches.jpg')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[3]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet Wires 2"
										src={require('../../assets/images/MightyVet-wires-02.jpg')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet Wires 1"
										src={require('../../assets/images/MightyVet-wires-01.jpg')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[4]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Interaction Design
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet search bar"
										src={require('../../assets/images/MightyVet-search.jpg')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[5]}
									</p>
								</div>
							</div>
						</div>
					)}
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
