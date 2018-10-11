import React, { Component } from 'react';

export default class NotFound extends Component {
	render() {
		return (
			<div className="page">
				<div className="row">
					<div className="twelve columns">
						<div className="notfound">
							<h2>D'oh! 404</h2>
							<img
								src={require(`../assets/images/homer-muumuu.png`)}
								alt="fat homer"
							/>
							<p>Hey! All I have to type is Y.</p>
							<p>I just tripled my productivity!</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
