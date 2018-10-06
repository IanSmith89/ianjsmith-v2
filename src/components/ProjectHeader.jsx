import React from 'react';

const ProjectHeader = ({ project }) => {
	return (
		<div className="row">
			<div className="twelve columns">
				<div className="project-header">
					<h1 className="project-title">{project.name}</h1>
					<div className="underline" />
					<h3 className="project-services">
						{project.services && project.services.join(' + ')}
					</h3>
					<p className="project-description">{project.description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectHeader;
