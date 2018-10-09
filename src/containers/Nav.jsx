import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import cx from 'classnames';

@observer
class Nav extends Component {
	constructor(props) {
		super(props);

		this.pathname = props.location.pathname;
	}

	componentWillUpdate(nextProps) {
		if (nextProps.history.action !== 'POP') {
			window.scrollTo(0, 0);
		}

		if (this.pathname !== nextProps.location.pathname) {
			this.pathname = nextProps.location.pathname;
		}
	}

	render() {
		return (
			<nav
				className={cx('top-nav', {
					light: this.pathname !== '/'
				})}
			>
				<div className="container">
					<div className="row">
						<div className="twelve columns">
							<div className="logo">
								<Link to="/">Ian J. Smith</Link>
							</div>
							<div className="page-links">
								<Link
									to="/"
									className={cx({
										active:
											this.pathname === '/' ||
											this.pathname.indexOf(
												'/projects'
											) !== -1
									})}
								>
									Work
									<div className="underline" />
								</Link>
								<Link
									to="/about"
									className={cx({
										active: this.pathname === '/about'
									})}
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
