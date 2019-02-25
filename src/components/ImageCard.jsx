import React from 'react';
import ProjectImage from './ProjectImage';

const ImageCard = ({ alt, onClick, src }) => {
	return (
		<div className="row">
			<div className="twelve columns">
				<ProjectImage alt={alt} onClick={onClick} src={src} />
			</div>
		</div>
	);
};

export default ImageCard;
