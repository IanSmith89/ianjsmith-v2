import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import cx from 'classnames';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;
import ArrowIcon from '../components/ArrowIcon';

@inject('workStore')
@observer
class ProjectControls extends React.Component {
	constructor(props) {
		super(props);

		this.pathname = props.location.pathname;
		this.projectLinks = props.workStore.projectLinks;
	}

	componentWillUpdate(nextProps) {
		if (this.pathname !== nextProps.location.pathname) {
			this.pathname = nextProps.location.pathname;
		}
	}

	handleClick(e, linkIsActive) {
		if (linkIsActive) return e.preventDefault();
	}

	render() {
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
							{this.projectLinks.map(link => {
								const active = this.pathname === link.to;

								return (
									<li key={link.name}>
										<Link
											className={cx({
												active
											})}
											to={link.to}
											onClick={e =>
												this.handleClick(e, active)
											}
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
	}
}

export default withRouter(ProjectControls);
