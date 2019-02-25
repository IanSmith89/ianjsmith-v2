import React from 'react';
import { inject, observer } from 'mobx-react';
import ImageCard from '../../components/ImageCard';

@inject('actions', 'lightboxStore')
@observer
export default class MightyVet extends React.Component {
	images = [
		{
			caption: (
				<a
					className="image-lightbox-link"
					href="https://docs.google.com/spreadsheets/d/1Y4gjfmbnQSKE7TDBOpZikFrX_Df4msfs41pXgUC6CX8/edit?usp=sharing"
					target="_blank"
				>
					Link to Heuristic Review
				</a>
			),
			src: require('../../assets/images/MightyVet-heuristic.png')
		},
		{
			caption: (
				<p className="image-lightbox-caption">Competitive Analysis</p>
			),
			src: require('../../assets/images/mightyvet-competitive-analysis.jpg')
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
						<h3 className="section-label">Heuristic Review</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="MightyVet Heuristic Analysis"
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
						<h3 className="section-label">Competitive Analysis</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="MightyVet competitive analysis"
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
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">
							Sketching &amp; Prototyping
						</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="MightyVet Sketches"
							onClick={() =>
								actions.openLightbox(lightboxStore, 3)
							}
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
							{project.designProcess[4]}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">Interaction Design</h3>
						<div className="underline" />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<ImageCard
							alt="MightyVet search bar"
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
							{project.designProcess[5]}
						</p>
					</div>
				</div>
			</div>
		) : null;
	}
}
