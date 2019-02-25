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
								experiences as a UX Designer for Boeing.
							</h1>
						</div>
						<div className="four columns">
							<div className="headshot-container">
								<img
									src={require('../assets/images/headshot.jpg')}
									alt="Ian J. Smith | Creative Developer and Interactive Designer | Seattle, WA"
									className="headshot"
								/>
								<small className="subtext">MY FACE</small>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="twelve columns">
							<div className="approach-section">
								<h2 className="section-header">
									my <span>story</span>
								</h2>
								<div className="underline" />
								<p className="approach-description">
									My path to UX design started at a young age
									with my early determination to one day be an
									architect. I was sure I would never do
									anything else, so I first attended college
									to study architecture via an environmental
									design program. After realizing that I
									wasn't a fit for the profession I decided to
									switch majors to graphic design. This turned
									out to be an excellent choice for me.
								</p>
								<p className="approach-description">
									Since graduating in 2013 with a B.F.A. in
									Graphic Design I have worked at screen
									printing and embroidery shops, photography
									studios, coding boot camps, and most
									recently for consulting agencies. I love
									taking on the challenges of understanding
									how others think and feel. With this
									information, I also enjoy figuring out how
									to realize meaningful designs by leveraging
									my experience as a developer. This
									compliments my design sensibilities while
									allowing me to effectively communicate with
									anyone involved in the process. I appreciate
									the lessons I've learned so far, and I look
									forward to the perpetual education that the
									future holds.
								</p>
								<p className="approach-description">
									Depending on the season, I like to go
									snowboarding, running, or hiking in my free
									time. I grew up playing ice hockey in
									Colorado, so I'm a huge Avalanche fan. I'm
									also an unashamed Renaissance art admirer,
									but I do love a good mosh pit. And in case
									you were wondering I market myself with a
									"J." to add a little pizzazz to my somewhat
									generic name. Also, it's my middle initial.
								</p>
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
									problem I face. Whether it's user research,
									interaction design, prototyping, information
									architecture, or visual design, I'm not
									afraid to take a step back in my process. I
									know you{' '}
									<span className="strike">rarely</span> never
									get everything right the first time. It's
									simply human nature.
								</p>
								<p className="approach-description">
									I've learned to take an iterative approach
									to design and to view mistakes as positive
									learning opportunities. Focusing on process
									over results has shown me the power of
									having a growth mindset. Working through
									ambiguity is one of my strengths because I
									know it only takes time and a willingness to
									learn when it comes to an unfamiliar
									challenge. I thrive at revisiting ideas or
									moving on to the next one when the time is
									right so that problems end up turning into
									solutions.
								</p>
								<ApproachVertical />
								<ApproachHorizontal />
								<small className="subtext">MY MANTRA</small>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="six columns">
							<div className="list">
								<h2 className="section-header">
									my <span>specialties</span>
								</h2>
								<div className="underline" />
								<p>UX / UI Design</p>
								<p>
									Information Architecture
									<span>*</span>
								</p>
								<p>
									Interaction Design
									<span>*</span>
								</p>
								<p>
									Prototyping
									<span>*</span>
								</p>
								<p>Visual / Graphic Design</p>
								<p>Front End Development</p>
								<p>User Research</p>
							</div>
						</div>
						<div className="six columns">
							<div className="list">
								<h2 className="section-header">
									my <span>toolbelt</span>
								</h2>
								<div className="underline" />
								<p>
									Illustrator + Photoshop + XD
									<span>*</span>
								</p>
								<p>Sketch + Invision</p>
								<p>Draw.io</p>
								<p>
									HTML + CSS / SCSS
									<span>*</span>
								</p>
								<p>
									JavaScript
									<span>*</span>
								</p>
								<p>
									React
									<span>*</span>
								</p>
								<p>Mobx / Redux</p>
								<p>Node + Express + Postgres</p>
								<p>
									Git + Command Line
									<span>*</span>
								</p>
								<p>Heroku</p>
							</div>
						</div>
					</div>
					<div className="twelve columns subtext-container">
						<small className="subtext">
							<span>*</span>
							my current favorites
						</small>
					</div>
					<ResumeLink />
				</div>
			</main>
		);
	}
}
