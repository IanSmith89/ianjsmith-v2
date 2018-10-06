import React from 'react';

const FullImage = ({ imageAlt, imageSrc, title }) => {
	return (
		<div className="row">
			<div className="twelve columns">
				<h3>{title}</h3>
				<div className="underline" />
			</div>
			<div className="twelve columns sketches">
				{imageSrc ? (
					<img
						className="full-width-image"
						src={require(`../assets/images/${imageSrc}`)}
						alt={imageAlt}
					/>
				) : (
					<div className="no-image" />
				)}
			</div>
		</div>
	);
};

export default FullImage;
