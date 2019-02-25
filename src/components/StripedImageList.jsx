import React from 'react';
import ProjectImage from './ProjectImage';

const StripedImageList = ({ images }) => {
	return (
		<div className="row diagonal-stripes">
			<div className="container">
				<div className="row">
					{images.map((image, i) => (
						<div className={image.className} key={i}>
							<ProjectImage
								alt={image.alt}
								src={require(`../assets/images/${image.src}`)}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default StripedImageList;
