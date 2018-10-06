import React from 'react';
import ProjectImage from './ProjectImage';

const ImageCard = ({ alt, src }) => {
	return (
		<div className="row">
			<div className="twelve columns">
				<ProjectImage alt={alt} src={src} />
			</div>
		</div>
	);
};

export default ImageCard;
