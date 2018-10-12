import React from 'react';
import ApproachVertical from '../components/ApproachVertical';
import ApproachHorizontal from '../components/ApproachHorizontal';
import ResumeLink from '../components/ResumeLink';

export default class AboutPage extends React.Component {
	render() {
		return (
			<main className="about page">
				<div className="container">
					<div className="row">
						<div className="six columns">
							<h1 className="about-intro">
								Hey there,
								<br />
								I’m Ian Smith, a creative developer and
								interactive designer based out of Seattle. I
								currently build human-centered experiences as a
								UX Designer and Front End Developer for High
								Seas Consulting, Inc.
							</h1>
						</div>
					</div>
					<div className="row">
						<div className="twelve columns">
							<div className="approach-section">
								<h2 className="section-header">
									my <span>approach</span>
								</h2>
								<div className="underline" />
								<p className="approach-description">
									I enjoy taking an agile approach to
									human-centered design thinking and applying
									it to any problem I face, whether it be
									wireframing, development, interaction
									design, or working with someone else's
									designs to build a working application. I am
									not afraid to take a step back in my
									creative process because I know you rarely
									get everything right the first time. It's
									simply human nature.
								</p>
								<p className="approach-description">
									Overall, I believe it is essential to take
									an iterative approach to creative problem
									solving. Product design and development
									benefit from viewing mistakes as positive
									learning opportunities and moving on to the
									next idea or a new way of looking at the
									problem so that it gets solved effectively.
								</p>
								<ApproachVertical />
								<ApproachHorizontal />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="four columns">
							<div className="list">
								<h2 className="section-header">
									my <span>skills</span>
								</h2>
								<div className="underline" />
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
						<div className="four columns">
							<div className="list">
								<h2 className="section-header">
									my <span>tools</span>
								</h2>
								<div className="underline" />
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
						<div className="four columns">
							<div className="contact">
								<h2 className="section-header">
									contact <span>me</span>
								</h2>
								<div className="underline" />
								<p className="contact-tagline">
									Want to collaborate on your next project or
									have a cool idea how I can improve this
									portfolio? Reach out and connect:
								</p>
								<div className="social-links">
									<a href="mailto:iansmith1026@gmail.com">
										Email
									</a>
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
								<div className="headshot-container">
									<img
										src={require('../assets/images/headshot.jpg')}
										alt="Ian J. Smith | Creative Developer and Interactive Designer | Seattle, WA"
										className="headshot"
									/>
								</div>
							</div>
						</div>
					</div>
					<ResumeLink />
				</div>
			</main>
		);
	}
}
