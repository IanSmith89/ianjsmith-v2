import React from 'react';
import { observer } from 'mobx-react';
import FullImage from '../../components/FullImage';
import TextListCard from '../../components/TextListCard';
import StripedImageList from '../../components/StripedImageList';
import TextListDark from '../../components/TextListDark';
import TextListLight from '../../components/TextListLight';
import ImageList from '../../components/ImageList';

@observer
export default class Dash extends React.Component {
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
							alt: 'desktop listings screenshot',
							className: 'twelve columns',
							src: 'dash-listings.jpg'
						},
						{
							alt: 'tablet screenshot',
							className: 'six columns no-margin',
							src: 'dash-tablet.jpg'
						},
						{
							alt: 'mobile screenshot',
							className: 'six columns',
							src: 'dash-mobile.jpg'
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
								'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
							images: [
								{
									alt: 'project detail 1',
									src: 'dash-desktop.jpg'
								}
							],
							title: 'Project Feature 1'
						},
						{
							description:
								'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
							images: [
								{
									alt: 'project detail 2',
									src: 'dash-trends.jpg'
								}
							],
							title: 'Project Feature 2'
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
