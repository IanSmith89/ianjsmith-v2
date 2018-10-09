import React from 'react';
import { observer } from 'mobx-react';
import FullImage from '../../components/FullImage';
import TextListCard from '../../components/TextListCard';
import StripedImageList from '../../components/StripedImageList';
import TextListDark from '../../components/TextListDark';
import TextListLight from '../../components/TextListLight';
import ImageList from '../../components/ImageList';

@observer
export default class Paragon extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<div>
				{/* <FullImage
					imageAlt="early sketches"
					imageSrc="astarte-sketches.jpg"
					title="early sketches"
				/> */}
				<TextListCard
					listItems={project.users || []}
					title={['Who are the ', <span key="span">users</span>, '?']}
				/>
				<StripedImageList
					images={[
						{
							alt: 'desktop view',
							className: 'twelve columns',
							src: 'paragon-search.jpg'
						},
						{
							alt: 'tablet view',
							className: 'six columns no-margin',
							src: 'paragon-tablet.jpg'
						},
						{
							alt: 'tablet view',
							className: 'six columns',
							src: 'paragon-mobile.jpg'
						}
					]}
				/>
				<TextListDark
					listItems={project.why || []}
					title={[<span key="span">why</span>, ' is this needed?']}
				/>
				<TextListLight
					listItems={project.how || []}
					title={[
						<span key="span">How</span>,
						' is this project used?'
					]}
				/>
				<ImageList
					items={[
						{
							description:
								'I created text based animations using CSS and scalable vector graphic (SVG) elements. The page was translated into Mandarin and Simplified Chinese, so I researched Chinese calligraphy and made sure the appearance order and stroke direction of each Chinese character was implemented correctly.',
							images: [
								{
									alt: 'animated paragon text',
									src: 'paragon-choose-paragon.gif'
								},
								{
									alt: 'animated paragon text chinese',
									src: 'paragon-choose-paragon-chinese.gif'
								}
							],
							title: 'animated chinese characters'
						},
						{
							description:
								'The neighborhoods section of the site had interactive maps that required responsive hover states. I created it so the user could hover over either the name or region to highlight the neighborhood and made sure the color choices were logical while remaining on brand.',
							images: [
								{
									alt: 'san francisco map names',
									src: 'paragon-sf-map-names.gif'
								},
								{
									alt: 'san francisco map regions',
									src: 'paragon-sf-map-places.gif'
								}
							],
							title: 'interactive svg maps'
						}
					]}
				/>
				<TextListDark
					listItems={project.takeaways || []}
					noStyle
					title={['project ', <span key="span">takeaways</span>]}
				/>
			</div>
		);
	}
}
