import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import cx from 'classnames';

@observer
export default class Footer extends Component {
	render() {
		const { activePathname } = this.props.stores.appStore;

		return (
			<footer
				className={cx('footer', {
					light: activePathname !== '/'
				})}
			>
				<div className="row">
					<div className="twelve columns copyright">
						<small>
							&copy; Ian Smith, {new Date().getFullYear()}
						</small>
					</div>
				</div>
			</footer>
		);
	}
}
