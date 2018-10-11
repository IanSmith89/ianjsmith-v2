import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import cx from 'classnames';

@inject('actions')
@observer
class Nav extends Component {
	constructor(props) {
		super(props);

		this.actions = props.actions;
	}

	render() {
		const { location } = this.props;

		return (
			<nav className="top-nav">
				<div className="container">
					<div className="row">
						<div className="twelve columns">
							<div className="logo">
								<Link
									to="/"
									onClick={e =>
										this.actions.handleLinkClick(
											e,
											location.pathname === '/'
										)
									}
								>
									Ian J. Smith
								</Link>
							</div>
							<div className="page-links">
								<Link
									className={cx({
										active:
											location.pathname === '/' ||
											location.pathname.indexOf(
												'/projects'
											) !== -1
									})}
									to="/"
									onClick={e =>
										this.actions.handleLinkClick(
											e,
											location.pathname === '/'
										)
									}
								>
									Work
									<div className="underline" />
								</Link>
								<Link
									className={cx({
										active: location.pathname === '/about'
									})}
									to="/about"
									onClick={e =>
										this.actions.handleLinkClick(
											e,
											location.pathname === '/about'
										)
									}
								>
									About
									<div className="underline" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default withRouter(Nav);
