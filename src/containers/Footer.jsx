import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
import cx from 'classnames';

@observer
class Footer extends Component {
	constructor(props) {
		super(props);

		this.pathname = props.location.pathname;
		this.year = new Date().getFullYear();
	}

	componentWillUpdate(nextProps) {
		if (this.pathname !== nextProps.location.pathname) {
			this.pathname = nextProps.location.pathname;
		}
	}

	render() {
		return (
			<footer
				className={cx('footer', {
					light: this.pathname !== '/'
				})}
			>
				<div className="row">
					<div className="twelve columns copyright">
						<small>&copy; Ian Smith, {this.year}</small>
					</div>
				</div>
			</footer>
		);
	}
}

export default withRouter(Footer);
