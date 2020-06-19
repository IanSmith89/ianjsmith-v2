import React from 'react';
import { inject, observer } from 'mobx-react';
import FullImage from '../components/FullImage';
import ResumeLink from '../components/ResumeLink';

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

	// The Downtown Artery is a cafe, bar, and
	// music venue in Old Town Fort Collins, CO.
	// Focused on giving artists, musicians, and
	// other creatives a central hub for enjoyment,
	// the Artery regularly hosts music concerts
	// and other performances. As a freelancer, I
	// created a number of event and concert
	// posters with a combination of traditional
	// and digital media.

	render() {
		const { project } = this.props.workStore;

		return (
			<div className="page">
				<div className="container">
					<div className="row">
						<div className="twelve columns">
							<div className="posters-header">
								<h1 className="project-title">
									My Kind of Fun
								</h1>
								<div className="underline" />
								<p className="project-description">
									I'm an avid supporter of the arts and live
									music, and I enjoy getting my hands dirty
									with illustration and print design in my
									free time. In a past life as a freelancer
									and while working at a bar and music venue I
									created gig posters for concerts and events.
									Here is a collection of a few of my
									favorites.
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
					<ResumeLink />
				</div>
			</div>
		);
	}
}
