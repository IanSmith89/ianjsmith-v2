import React from 'react';
import ProjectHeader from './ProjectHeader';
import ImageCard from './ImageCard';
import ProjectDetails from './ProjectDetails';

const DigitalProjectHeader = ({ project }) => {
	return (
		<div className="container">
			<ProjectHeader project={project} />
			<ImageCard
				alt="project screenshot"
				src={
					project.id
						? require(`../assets/images/${project.id}-cover.jpg`)
						: undefined
				}
			/>
			<ProjectDetails project={project} />
		</div>
	);
};

export default DigitalProjectHeader;
