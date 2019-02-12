import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import Lightbox from 'react-image-lightbox';
import CaseStudyHero from '../../components/CaseStudyHero';
import ImageCard from '../../components/ImageCard';

@observer
export default class MightyVet extends React.Component {
	@observable
	photoIndex = 0;
	@observable
	isOpen = false;
	images = [
		{
			caption: (
				<a className="image-lightbox-link" href="#">
					Link to Heuristic Review
				</a>
			),
			src: require('../../assets/images/MightyVet-heuristic.png')
		},
		{
			caption: (
				<p className="image-lightbox-caption">Competitive Analysis</p>
			),
			src: require('../../assets/images/VetMindMatters-logo.jpg')
		},
		{
			caption: <p className="image-lightbox-caption">Sitemap</p>,
			src: require('../../assets/images/MightyVet-sitemap.jpg')
		},
		{
			caption: <p className="image-lightbox-caption">Sketches</p>,
			src: require('../../assets/images/MightyVet-sketches.jpg')
		},
		{
			caption: <p className="image-lightbox-caption">Wireframes</p>,
			src: require('../../assets/images/MightyVet-wires-02.jpg')
		},
		{
			caption: (
				<p className="image-lightbox-caption">
					Dynamic Search Component
				</p>
			),
			src: require('../../assets/images/MightyVet-search.jpg')
		}
	];

	openLightbox(photoIndex) {
		this.setPhotoIndex(photoIndex);
		this.setIsOpen(true);
	}

	@action
	setIsOpen(isOpen) {
		this.isOpen = isOpen;
	}

	@action
	setPhotoIndex(photoIndex) {
		this.photoIndex = photoIndex;
	}

	render() {
		const { project } = this.props;

		return (
			<div>
				{this.isOpen && (
					<Lightbox
						animationOnKeyInput
						mainSrc={this.images[this.photoIndex].src}
						// nextSrc={
						// 	this.images[
						// 		(this.photoIndex + 1) % this.images.length
						// 	].src
						// }
						// prevSrc={
						// 	this.images[
						// 		(this.photoIndex + this.images.length - 1) %
						// 			this.images.length
						// 	].src
						// }
						imageCaption={this.images[this.photoIndex].caption}
						onCloseRequest={() => this.setIsOpen(false)}
						// onMovePrevRequest={() =>
						// 	this.setPhotoIndex(
						// 		(this.photoIndex + this.images.length - 1) %
						// 			this.images.length
						// 	)
						// }
						// onMoveNextRequest={() =>
						// 	this.setPhotoIndex(
						// 		(this.photoIndex + 1) % this.images.length
						// 	)
						// }
					/>
				)}
				<CaseStudyHero project={project} />
				<div className="container">
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">The Problem</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							<p className="section-content">{project.problem}</p>
						</div>
					</div>
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">Team & Role</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							<p className="section-content">
								{project.teamAndRole}
							</p>
						</div>
					</div>
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">The Solution</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							<p className="section-content">
								{project.solution}
							</p>
						</div>
					</div>
					{project.designProcess && (
						<div className="text-section">
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Design Process
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Heuristic Review
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet Heuristic Analysis"
										onClick={() => this.openLightbox(0)}
										src={this.images[0].src}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[0]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Competitive Analysis
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="four columns">
									<ImageCard
										alt="Vet Mind Matters logo"
										src={this.images[1].src}
									/>
								</div>
								<div className="four columns">
									<ImageCard
										alt="iMentor logo"
										src={require('../../assets/images/iMentor-logo.jpg')}
									/>
								</div>
								<div className="four columns">
									<ImageCard
										alt="Feeding America logo"
										src={require('../../assets/images/FeedingAmerica-logo.jpg')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[1]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Information Architecture
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet Sitemap"
										onClick={() => this.openLightbox(2)}
										src={this.images[2].src}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[2]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Sketching & Prototyping
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet Sketches"
										onClick={() => this.openLightbox(3)}
										src={this.images[3].src}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[3]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet Wires 2"
										onClick={() => this.openLightbox(4)}
										src={this.images[4].src}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[4]}
									</p>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<h3 className="section-label">
										Interaction Design
									</h3>
									<div className="underline" />
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<ImageCard
										alt="MightyVet search bar"
										onClick={() => this.openLightbox(5)}
										src={this.images[5].src}
									/>
								</div>
							</div>
							<div className="row">
								<div className="twelve columns">
									<p className="section-content full">
										{project.designProcess[5]}
									</p>
								</div>
							</div>
						</div>
					)}
					<div className="row text-section">
						<div className="six columns">
							<h3 className="section-label">
								Outcome & Reflection
							</h3>
							<div className="underline" />
						</div>
						<div className="six columns">
							{project.outcomeAndReflection &&
								project.outcomeAndReflection.map((p, i) => {
									return (
										<p className="section-content" key={i}>
											{p}
										</p>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
