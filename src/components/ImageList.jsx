import React from 'react';

const ImageList = ({ items }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="twelve columns project-features">
					{items.map(item => {
						return (
							<div key={item.image.alt}>
								{item.image.src ? (
									<img
										className="project-detail-image"
										src={require(`../assets/images/${
											item.image.src
										}`)}
										alt={item.image.alt}
									/>
								) : (
									<div className="no-image" />
								)}
								<h3>{item.title}</h3>
								<div className="underline" />
								<p className="project-feature-description">
									{item.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ImageList;
