import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;

function removeProtocol(str) {
	if (str) {
		return str.replace(/https:\/\//g, '').replace(/http:\/\//g, '');
	}
}

@observer
export default class ProjectPage extends React.Component {
	projectLinks = [
		{
			name: 'all',
			to: '/'
		},
		{
			name: 'paragon',
			to: '/projects/paragon'
		},
		{
			name: 'astarte',
			to: '/projects/astarte'
		},
		{
			name: 'dreamstream',
			to: '/projects/dreamstream'
		},
		{
			name: 'salvage',
			to: '/projects/salvage'
		},
		{
			name: 'cheba hut',
			to: '/projects/cheba-hut'
		},
		{
			name: 'downtown artery',
			to: '/projects/downtown-artery'
		},
		{
			name: 'topshelf',
			to: '/projects/topshelf'
		}
	];

	componentDidMount() {
		const { projectId } = this.props.match.params;
		this.props.actions.getProjectById(projectId);
	}

	componentWillUpdate(nextProps) {
		const { projectId } = nextProps.match.params;

		if (projectId !== this.props.stores.workStore.project.id) {
			this.props.actions.getProjectById(projectId);
			window.scrollTo(0, 0);
		}
	}

	componentWillUnmount() {
		this.props.actions.clearProject();
	}

	render() {
		const { activePathname } = this.props.stores.appStore;
		const { project } = this.props.stores.workStore;

		return (
			<main id="project-top" className="project page">
				<div className="container">
					<div className="row">
						<div className="twelve columns">
							<div className="project-header">
								<h1 className="project-title">
									{project.name}
								</h1>
								<div className="underline" />
								<h3 className="project-services">
									{project.longServices}
								</h3>
								<p className="project-description">
									{project.description}
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="twelve columns">
							<div className="project-image-container">
								{project.id ? (
									<img
										className="project-image"
										src={require(`../assets/images/${
											project.id
										}-cover.jpg`)}
										alt="project"
									/>
								) : (
									<div className="no-image" />
								)}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="six columns project-details-container">
							<div className="project-detail">
								<div className="label">With:</div>
								<div className="detail">{project.with}</div>
							</div>
							<div className="project-detail">
								<div className="label">Visit:</div>
								<div className="detail">
									<a
										href={project.websiteUrl}
										target="_blank"
									>
										{removeProtocol(project.websiteUrl)}
									</a>
								</div>
							</div>
							<div className="project-detail">
								<div className="label">Client:</div>
								<div className="detail">{project.client}</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="twelve columns">
							<h3>initial sketches</h3>
							<div className="underline" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns sketches">
						{project.id ? (
							<img
								className="full-width-image"
								src={require(`../assets/images/${
									project.id
								}-sketches.jpg`)}
								alt="sketches"
							/>
						) : null}
					</div>
				</div>
				<div className="container">
					{project.users ? (
						<div className="row">
							<div className="twelve columns">
								<div className="text-section">
									<h5 className="section-header">
										Who are the <span>users</span>?
									</h5>
									<div className="underline" />
									<ul className="no-style">
										{project.users.map(user => (
											<li key={user}>{user}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					) : null}
				</div>
				<div className="row diagonal-stripes">
					<div className="container">
						<div className="row">
							<div className="twelve columns">
								<div className="project-image-container">
									{project.id ? (
										<img
											className="project-image"
											src={require(`../assets/images/${
												project.id
											}-tablet.jpg`)}
											alt="tablet view"
										/>
									) : (
										<div className="no-image" />
									)}
								</div>
							</div>
							<div className="twelve columns">
								<div className="project-image-container">
									{project.id ? (
										<img
											className="project-image"
											src={require(`../assets/images/${
												project.id
											}-desktop.jpg`)}
											alt="desktop view"
										/>
									) : (
										<div className="no-image" />
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row text-section dark">
					<div className="container">
						<div className="row">
							<div className="twelve columns">
								<h3 className="section-header">
									<span>why</span> is this needed?
								</h3>
								<div className="underline" />
								<ul>
									<li>
										Lorem ipsum dolor sit amet, consectetuer
										adipiscing elit, sed diam nonummy nibh.
									</li>
									<li>
										Lorem ipsum dolor sit amet, consectetuer
										adipiscing elit, sed diam nonummy nibh.
									</li>
									<li>
										Lorem ipsum dolor sit amet, consectetuer
										adipiscing elit, sed diam nonummy nibh.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="twelve columns">
							<div className="text-section light">
								<h5 className="section-header">
									<span>How</span> is this project used?
								</h5>
								<div className="underline" />
								<ul>
									<li>
										Lorem ipsum dolor sit amet, consectetuer
										adipiscing elit, sed diam nonummy nibh.
									</li>
									<li>
										Lorem ipsum dolor sit amet, consectetuer
										adipiscing elit, sed diam nonummy nibh.
									</li>
									<li>
										Lorem ipsum dolor sit amet, consectetuer
										adipiscing elit, sed diam nonummy nibh.
									</li>
								</ul>
							</div>
						</div>
						<div className="twelve columns project-features">
							{project.id ? (
								<img
									className="project-detail-image"
									src={require(`../assets/images/${
										project.id
									}-project-detail-01.jpg`)}
									alt="project detail 1"
								/>
							) : (
								<div className="no-image" />
							)}
							<h3>Project Feature 1</h3>
							<div className="underline" />
							<p className="project-feature-description">
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volutpat.
							</p>
							{project.id ? (
								<img
									className="project-detail-image"
									src={require(`../assets/images/${
										project.id
									}-project-detail-02.jpg`)}
									alt="project detail 2"
								/>
							) : (
								<div className="no-image" />
							)}
							<h3>Project Feature 2</h3>
							<div className="underline" />
							<p className="project-feature-description">
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volutpat.
							</p>
						</div>
					</div>
				</div>
				<div className="row text-section dark">
					<div className="container">
						<div className="row">
							<div className="twelve columns">
								<h3 className="section-header">
									project <span>takeaways</span>
								</h3>
								<div className="underline" />
								<ul className="no-style">
									<li>
										Lorem ipsum dolor sit amet, consectetuer
										adipiscing elit, sed diam nonummy nibh
										euismod tincidunt ut laoreet dolore
										magna aliquam erat volutpat.
									</li>
									<li>
										Euismod tincidunt ut laoreet dolore
										magna aliquam erat volutpat. Lorem ipsum
										dolor sit amet, consectetuer adipiscing
										elit, sed diam nonummy nibh.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns project-controls">
						<div className="to-top">
							<ScrollLink
								to="project-top"
								spy
								smooth
								duration={750}
							>
								<img
									className="arrow"
									src={require('../assets/images/arrow.svg')}
									alt="to top arrow"
								/>
								to top
							</ScrollLink>
						</div>
						<div className="project-links-container">
							<ul className="no-style">
								{this.projectLinks.map(link => {
									return (
										<li key={link.name}>
											<Link
												className={cx({
													active:
														activePathname ===
														link.to
												})}
												to={link.to}
												onClick={e => {
													if (
														activePathname ===
														link.to
													)
														return e.preventDefault();
												}}
											>
												{link.name}
												<div className="underline" />
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
