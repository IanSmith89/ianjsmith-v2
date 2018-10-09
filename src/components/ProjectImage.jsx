import React from 'react';

const ProjectImage = ({ alt, src }) => {
	return (
		<div className="project-image-container">
			{src ? <img className="project-image" src={src} alt={alt} /> : null}
		</div>
	);
};

export default ProjectImage;
