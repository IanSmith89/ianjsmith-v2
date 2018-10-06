import React from 'react';

const ProjectDetails = ({ project }) => {
	const _removeProtocol = str => {
		if (str) {
			return str.replace(/http?s:\/\//g, '');
		}
	};

	return (
		<div className="row">
			<div className="six columns project-details-container">
				<div className="project-detail">
					<div className="label">With:</div>
					<div className="detail">{project.with}</div>
				</div>
				{project.client ? (
					<div className="project-detail">
						<div className="label">Client:</div>
						<div className="detail">{project.client}</div>
					</div>
				) : null}
				{project.techStack ? (
					<div className="project-detail">
						<div className="label">Stack:</div>
						<div className="detail">
							{project.techStack.join(', ')}
						</div>
					</div>
				) : null}
				<div className="project-detail">
					<div className="label">Visit:</div>
					<div className="detail">
						<a href={project.websiteUrl} target="_blank">
							{_removeProtocol(project.websiteUrl)}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
