import React from 'react';
import ProjectHeader from './ProjectHeader';
import FullImage from './FullImage';
import ProjectDetails from './ProjectDetails';

const PrintProjectHeader = ({ images, project, showDetails }) => {
	return (
		<div>
			<div className="container">
				<ProjectHeader project={project} />
			</div>
			{images.map(image => (
				<FullImage key={image.alt} alt={image.alt} src={image.src} />
			))}
			{showDetails ? (
				<div className="container">
					<ProjectDetails project={project} />
				</div>
			) : null}
		</div>
	);
};

export default PrintProjectHeader;
