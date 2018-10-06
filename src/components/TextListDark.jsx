import React from 'react';
import cx from 'classnames';

const TextListDark = ({ listItems, noStyle, title }) => {
	return (
		<div className="row text-list dark">
			<div className="container">
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-header">{title}</h3>
						<div className="underline" />
						<ul
							className={cx({
								'no-style': noStyle
							})}
						>
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

export default TextListDark;
