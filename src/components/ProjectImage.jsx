import React from 'react';
import cx from 'classnames';

const ProjectImage = ({ alt, onClick, src }) => {
	return (
		<div className="project-image-container">
			{src ? (
				<img
					className={cx('project-image', {
						clickable: onClick
					})}
					src={src}
					alt={alt}
					onClick={onClick}
				/>
			) : null}
		</div>
	);
};

export default ProjectImage;
