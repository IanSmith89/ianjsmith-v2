import React from 'react';

const TextListLight = ({ listItems, title }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="twelve columns">
					<div className="text-list light">
						<h5 className="section-header">{title}</h5>
						<div className="underline" />
						<ul className="no-style">
							{listItems.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextListLight;
