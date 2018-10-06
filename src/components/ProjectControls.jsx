import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;
import ArrowIcon from './ArrowIcon';

const ProjectControls = ({ activePathname }) => {
	const _handleClick = (e, linkIsActive) => {
		if (linkIsActive) return e.preventDefault();
	};

	const _projectLinks = [
		{
			name: 'all',
			to: '/'
		},
		{
			name: 'paragon',
			to: '/projects/paragon'
		},
		{
			name: 'astarte',
			to: '/projects/astarte'
		},
		{
			name: 'dreamstream',
			to: '/projects/dreamstream'
		},
		{
			name: 'salvage',
			to: '/projects/salvage'
		},
		{
			name: 'cheba hut',
			to: '/projects/cheba-hut'
		},
		{
			name: 'downtown artery',
			to: '/projects/downtown-artery'
		},
		{
			name: 'topshelf',
			to: '/projects/topshelf'
		}
	];

	return (
		<div className="row">
			<div className="twelve columns project-controls">
				<div className="to-top">
					<ScrollLink to="project-top" spy smooth duration={750}>
						<ArrowIcon />
						to top
					</ScrollLink>
				</div>
				<div className="project-links-container">
					<ul className="no-style">
						{_projectLinks.map(link => {
							const active = activePathname === link.to;

							return (
								<li key={link.name}>
									<Link
										className={cx({
											active
										})}
										to={link.to}
										onClick={e => _handleClick(e, active)}
									>
										{link.name}
										<div className="underline" />
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectControls;
