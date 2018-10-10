import React from 'react';
import ResumeLink from '../components/ResumeLink';

export default class AboutPage extends React.Component {
	render() {
		return (
			<main className="about page">
				<div className="container">
					<section className="row">
						<div className="six columns">
							<h1 className="about-intro">
								Hey there,
								<br />
								I’m Ian Smith, a creative developer and
								interactive designer based out of Seattle. I
								currently build human-centered experiences and
								intuitive, responsive interfaces as a UX
								Designer and Front End Developer for High Seas
								Consulting, Inc.
							</h1>
						</div>
					</section>
					<section className="row">
						<div className="six columns">
							<div className="list">
								<h2 className="section-header">Services</h2>
								<p>UX / UI Design</p>
								<p>Information Architecture</p>
								<p>Visual / Graphic Design</p>
								<p>Interaction Design</p>
								<p>Front End Development</p>
								<p>Branding</p>
								<p>Illustration</p>
								<p>Search Engine Optimization</p>
							</div>
						</div>
						<div className="six columns">
							<div className="list">
								<h2 className="section-header">
									Tools &amp; Skills
								</h2>
								<p>XD - Illustrator - Photoshop</p>
								<p>Sketch - Invision</p>
								<p>Axure - Balsamiq</p>
								<p>HTML - CSS - SCSS</p>
								<p>JavaScript - Node</p>
								<p>React - Angular</p>
								<p>Mobx - Redux</p>
								<p>Git - CLI - Agile</p>
								<p>Express - Postgres</p>
								<p>Heroku - Firebase</p>
								<p>Mocha - Chai</p>
							</div>
						</div>
					</section>
					<section className="row">
						<div className="six columns">
							<div className="contact">
								<div className="headshot-container">
									<img
										src={require('../assets/images/headshot.jpg')}
										alt="Ian J. Smith | Creative Developer and Interactive Designer | Seattle, WA"
										className="headshot"
									/>
								</div>
								<h2 className="section-header">Contact</h2>
								<p className="contact-tagline">
									Want to collaborate on your next project?
									Reach out and connect. Drop me a line:
								</p>
								<div className="mailto-link">
									<a href="mailto:iansmith1026@gmail.com">
										iansmith1026@gmail.com
									</a>
								</div>
								<div className="social-links">
									<a
										href="https://www.linkedin.com/in/ian-smith"
										target="_blank"
									>
										LinkedIn
									</a>
									<a
										href="https://github.com/IanSmith89"
										target="_blank"
									>
										GitHub
									</a>
									<a
										href="https://www.facebook.com/ian.smith.3388"
										target="_blank"
									>
										Facebook
									</a>
								</div>
							</div>
						</div>
					</section>
					<ResumeLink />
				</div>
			</main>
		);
	}
}