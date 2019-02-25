import React from 'react';
import { inject, observer } from 'mobx-react';
import FullImage from '../components/FullImage';

@inject('workStore')
@observer
export default class GigPosters extends React.Component {
	images = [
		{
			alt: 'mimicking birds',
			src: 'posters-cover.jpg'
		},
		{
			alt: 'alex dang',
			src: 'posters-alex-dang.jpg'
		},
		{
			alt: 'elephant wrecking ball',
			src: 'posters-elephant-wrecking-ball.jpg'
		},
		{
			alt: 'reptar',
			src: 'posters-reptar.jpg'
		},
		{
			alt: 'ugly architect',
			src: 'posters-ugly-architect.jpg'
		},
		{
			alt: 'vinyl williams',
			src: 'posters-vinyl-williams.jpg'
		},
		{
			alt: 'harpoon the whale',
			src: 'posters-harpoon.jpg'
		}
	];

	render() {
		const { project } = this.props.workStore;

		return (
			<div className="page">
				<div className="container">
					<div className="row">
						<div className="twelve columns">
							<div className="posters-header">
								<h1 className="project-title">Gig Posters</h1>
								<div className="underline" />
								<p className="project-description">
									The Downtown Artery is a cafe, bar, and
									music venue in Old Town Fort Collins, CO.
									Focused on giving artists, musicians, and
									other creatives a central hub for enjoyment,
									the Artery regularly hosts music concerts
									and other performances. As a freelancer, I
									created a number of event and concert
									posters with a combination of traditional
									and digital media.
								</p>
							</div>
						</div>
					</div>
					{this.images.map(image => (
						<FullImage
							key={image.alt}
							alt={image.alt}
							src={image.src}
						/>
					))}
				</div>
			</div>
		);
	}
}
