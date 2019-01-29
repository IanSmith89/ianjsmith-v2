import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from './ArrowIcon';

const CaseStudyHero = ({ project }) => {
	return (
		<div className="row">
			<div className="twelve columns">
				<div className={`case-study-header ${project.id || ''}`}>
					<div className="dark-overlay">
						<div className="container">
							<div className="back-link">
								<Link to="/">
									<ArrowIcon />
									all work
								</Link>
							</div>
							<h1 className="case-study-name">{project.name}</h1>
							<div className="underline" />
							<h2 className="case-study-description">
								{project.description}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudyHero;
