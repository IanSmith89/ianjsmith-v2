import React from 'react';
import { inject, observer } from 'mobx-react';
import ImageCard from '../../components/ImageCard';

@inject('actions', 'lightboxStore')
@observer
export default class Astarte extends React.Component {
	images = [
		{
			caption: (
				<p className="image-lightbox-caption">Whiteboarding Session</p>
			),
			src: require('../../assets/images/astarte-sketches.jpg')
		},
		{
			caption: <p className="image-lightbox-caption">Sitemap</p>,
			src: require('../../assets/images/astarte-sitemap.png')
		},
		{
			caption: (
				<p className="image-lightbox-caption">Create Lot Workflow</p>
			),
			src: require('../../assets/images/astarte-workflows-create-lot.png')
		},
		{
			caption: (
				<p className="image-lightbox-caption">
					Create Product Workflow
				</p>
			),
			src: require('../../assets/images/astarte-workflows-create-product.png')
		},
		{
			caption: (
				<p className="image-lightbox-caption">Freezer Detail View</p>
			),
			src: require('../../assets/images/astarte-desktop.jpg')
		},
		{
			caption: (
				<p className="image-lightbox-caption">Relocating Inventory</p>
			),
			src: require('../../assets/images/astarte-project-detail-01.jpg')
		},
		{
			caption: (
				<p className="image-lightbox-caption">
					Updating Vial Information
				</p>
			),
			src: require('../../assets/images/astarte-project-detail-02.jpg')
		}
	];

	componentDidMount() {
		this.props.actions.setLightboxImages(
			this.props.lightboxStore,
			this.images
		);
	}

	componentWillUnmount() {
		this.props.actions.setLightboxImages(this.props.lightboxStore, []);
	}

	render() {
		const { actions, lightboxStore, project } = this.props;

		return project.designProcess ? (
			<div className="text-section">
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">
							Sketching &amp; Brainstorming
						</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="Astarte whiteboarding session"
							onClick={() =>
								actions.openLightbox(lightboxStore, 0)
							}
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
							Information Architecture
						</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="Astarte sitemap"
							onClick={() =>
								actions.openLightbox(lightboxStore, 1)
							}
							src={this.images[1].src}
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
						<h3 className="section-label">Workflows</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="six columns add-bottom-margin-sm">
						<ImageCard
							alt="Astarte create lot workflow"
							onClick={() =>
								actions.openLightbox(lightboxStore, 2)
							}
							src={this.images[2].src}
						/>
					</div>
					<div className="six columns columns">
						<p className="section-content">
							{project.designProcess[2]}
						</p>
					</div>
				</div>
				<div className="row add-bottom-margin-lg">
					<div className="six columns add-bottom-margin-sm">
						<ImageCard
							alt="Astarte create product workflow"
							onClick={() =>
								actions.openLightbox(lightboxStore, 3)
							}
							src={this.images[3].src}
						/>
					</div>
					<div className="six columns">
						<p className="section-content">
							{project.designProcess[3]}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">User Interface Design</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="six columns">
						<p className="section-content">
							{project.designProcess[4]}
						</p>
					</div>
					<div className="six columns add-bottom-margin-sm">
						<ImageCard
							alt="Astarte freezer view"
							onClick={() =>
								actions.openLightbox(lightboxStore, 4)
							}
							src={this.images[4].src}
						/>
					</div>
				</div>
				<div className="row">
					<div className="six columns">
						<p className="section-content">
							{project.designProcess[5]}
						</p>
					</div>
					<div className="six columns">
						<ImageCard
							alt="Astarte update vial location"
							onClick={() =>
								actions.openLightbox(lightboxStore, 5)
							}
							src={this.images[5].src}
						/>
					</div>
				</div>
			</div>
		) : null;
	}
}
