import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import MailIcon from '../components/MailIcon';
import LinkedInIcon from '../components/LinkedInIcon';
import GitHubIcon from '../components/GitHubIcon';
import MediumIcon from '../components/MediumIcon';

@observer
export default class Footer extends Component {
	constructor(props) {
		super(props);

		this.year = new Date().getFullYear();
	}

	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="twelve columns copyright">
							<small>
								Copyright &copy; {this.year} Ian Smith
							</small>
							<a href="mailto:iansmith1026@gmail.com">
								<MailIcon />
							</a>
							<a
								href="https://www.linkedin.com/in/ian-smith"
								target="_blank"
							>
								<LinkedInIcon />
							</a>
							<a
								href="https://github.com/IanSmith89"
								target="_blank"
							>
								<GitHubIcon />
							</a>
							<a
								href="https://medium.com/@iansmith1026"
								target="_blank"
							>
								<MediumIcon />
							</a>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
