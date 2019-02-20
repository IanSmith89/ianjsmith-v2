import React from 'react';
import { inject, observer } from 'mobx-react';
import ImageCard from '../../components/ImageCard';

@inject('actions', 'lightboxStore')
@observer
export default class ECommerce extends React.Component {
	images = [
		{
			caption: (
				<p className="image-lightbox-caption">Competitive Analysis</p>
			),
			src: require('../../assets/images/ecommerce-competitive-analysis.jpg')
		},
		{
			caption: (
				<p className="image-lightbox-caption">
					E-commerce Checkout Workflow
				</p>
			),
			src: require('../../assets/images/ecommerce-workflow.png')
		},
		{
			caption: (
				<p className="image-lightbox-caption">Desktop Wireframes</p>
			),
			src: require('../../assets/images/ecommerce-wires-desktop.png')
		},
		{
			caption: (
				<p className="image-lightbox-caption">Mobile Wireframes</p>
			),
			src: require('../../assets/images/ecommerce-wires-mobile.png')
		},
		{
			caption: <p className="image-lightbox-caption">Mobile Prototype</p>,
			src: require('../../assets/images/ecommerce-mocks-mobile.png')
		},
		{
			caption: (
				<p className="image-lightbox-caption">Desktop Prototype</p>
			),
			src: require('../../assets/images/ecommerce-mocks-desktop.png')
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
				<div className="row add-bottom-margin-lg">
					<div className="twelve columns">
						<img
							alt="E-commerce project timeline"
							src={require('../../assets/images/ecommerce-timeline.svg')}
						/>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">Competitive Analysis</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="E-commerce competitive analysis"
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
							E-commerce Checkout Workflow
						</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="E-commerce checkout workflow"
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
						<h3 className="section-label">Wireframes</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="E-commerce desktop wireframes"
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
							{project.designProcess[2]}
						</p>
					</div>
				</div>
				<div className="row add-bottom-margin-lg">
					<div className="twelve columns">
						<ImageCard
							alt="E-commerce mobile wireframes"
							onClick={() =>
								actions.openLightbox(lightboxStore, 3)
							}
							src={this.images[3].src}
						/>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">Final Prototype</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="E-commerce mobile prototype"
							onClick={() =>
								actions.openLightbox(lightboxStore, 4)
							}
							src={this.images[4].src}
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
							alt="E-commerce desktop prototype"
							onClick={() =>
								actions.openLightbox(lightboxStore, 5)
							}
							src={this.images[5].src}
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
			</div>
		) : null;
	}
}
