import React from 'react';

const FullImage = ({ alt, src, title }) => {
	return (
		<div className="row">
			{title ? (
				<div className="twelve columns">
					<h3>{title}</h3>
					<div className="underline" />
				</div>
			) : null}
			<div className="twelve columns sketches">
				{src ? (
					<img
						className="full-width-image"
						src={require(`../assets/images/${src}`)}
						alt={alt}
					/>
				) : (
					<div className="no-image" />
				)}
			</div>
		</div>
	);
};

export default FullImage;
