import React from 'react';
import cx from 'classnames';

const ImageList = ({ items }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="twelve columns project-features">
					{items.map(item => {
						return (
							<div key={item.title}>
								<div className="row">
									{item.images.map(image => {
										return (
											<div
												className={cx('columns', {
													twelve:
														item.images.length ===
														1,
													six:
														item.images.length ===
														2,
													'margin-bottom':
														item.images.length === 2
												})}
												key={image.alt}
											>
												<img
													className="project-detail-image"
													src={require(`../assets/images/${
														image.src
													}`)}
													alt={image.alt}
												/>
											</div>
										);
									})}
								</div>
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
