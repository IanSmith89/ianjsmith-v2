import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

@observer
export default class Footer extends Component {
	constructor(props) {
		super(props);

		this.year = new Date().getFullYear();
	}

	render() {
		return (
			<footer className="footer">
				<div className="row">
					<div className="twelve columns copyright">
						<small>&copy; Ian Smith, {this.year}</small>
					</div>
				</div>
			</footer>
		);
	}
}