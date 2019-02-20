import React from 'react';
import { inject, observer } from 'mobx-react';
import ImageCard from '../../components/ImageCard';

@inject('actions', 'lightboxStore')
@observer
export default class WAStateParks extends React.Component {
	images = [
		{
			caption: <p className="image-lightbox-caption">Sketches</p>,
			src: require('../../assets/images/wasp-sketches-alt.jpg')
		},
		{
			caption: <p className="image-lightbox-caption">Wireframes</p>,
			src: require('../../assets/images/wasp-wires.jpg')
		},
		{
			caption: <p className="image-lightbox-caption">Final Mockups</p>,
			src: require('../../assets/images/wasp-mocks.jpg')
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
						<h3 className="section-label">My Design Process</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">User Research</h3>
						<div className="underline" />
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
						<h3 className="section-label">Sketches</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row add-bottom-margin-lg">
					<div className="six columns add-bottom-margin-sm">
						<ImageCard
							alt="WA State Parks sketches"
							onClick={() =>
								actions.openLightbox(lightboxStore, 0)
							}
							src={this.images[0].src}
						/>
					</div>
					<div className="six columns">
						<p className="section-content">
							{project.designProcess[1]}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">Wireframes</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="WA State Parks wireframes"
							onClick={() =>
								actions.openLightbox(lightboxStore, 1)
							}
							src={this.images[1].src}
						/>
					</div>
				</div>
				<div className="row add-bottom-margin-lg">
					<div className="twelve columns">
						<p className="section-content full">
							{project.designProcess[2]}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">Final Mockups</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="WA State Parks mockups"
							onClick={() =>
								actions.openLightbox(lightboxStore, 2)
							}
							src={this.images[2].src}
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
			</div>
		) : null;
	}
}
