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
						<div className="eight columns">
							<h1 className="about-intro">
								Hi there.
								<br />
								I’m Ian J. Smith, a designer for humans.
								Currently based out of Seattle, I craft
								experiences as a UX Designer at Collinear Group.
							</h1>
						</div>
						<div className="four columns">
							<div className="headshot-container">
								<img
									src={require('../assets/images/headshot.jpg')}
									alt="Ian J. Smith | Creative Developer and Interactive Designer | Seattle, WA"
									className="headshot"
								/>
								<small className="subtext">(MY FACE)</small>
							</div>
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
									I like to apply design thinking to any
									problem I face. Whether it be information
									architecture, interaction design,
									prototyping, or cleaning the litter box. I'm
									not afraid to take a step back in my process
									because I know you rarely get everything
									right the first time. It's simply human
									nature.
								</p>
								<p className="approach-description">
									It is essential to take an iterative
									approach to product design. I've learned to
									view mistakes as positive learning
									opportunities. I thrive at moving on to the
									next idea when the time is right so problems
									turn into solutions.
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
									my <span>specialties</span>
								</h2>
								<div className="underline" />
								<p>UX / UI Design</p>
								<p>Information Architecture</p>
								<p>Interaction Design</p>
								<p>Prototyping</p>
								<p>Visual / Graphic Design</p>
								<p>Front End Development</p>
							</div>
						</div>
						<div className="four columns">
							<div className="list">
								<h2 className="section-header">
									my <span>toolbelt</span>
								</h2>
								<div className="underline" />
								<p>XD - Illustrator - Photoshop</p>
								<p>Sketch - Invision</p>
								<p>Axure - Balsamiq</p>
								<p>HTML - CSS - SCSS</p>
								<p>JavaScript - Node</p>
								<p>React</p>
								<p>Mobx - Redux</p>
								<p>Git - Command Line</p>
								<p>Express - Postgres</p>
								<p>Heroku</p>
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
							</div>
						</div>
					</div>
					<ResumeLink />
				</div>
			</main>
		);
	}
}
