import React from 'react';
import { observer } from 'mobx-react';
import FullImage from '../../components/FullImage';
import TextListCard from '../../components/TextListCard';
import StripedImageList from '../../components/StripedImageList';
import TextListDark from '../../components/TextListDark';
import TextListLight from '../../components/TextListLight';
import ImageList from '../../components/ImageList';

@observer
export default class Astarte extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<div>
				<FullImage
					imageAlt="early sketches"
					imageSrc="astarte-sketches.jpg"
					title="early sketches"
				/>
				<TextListCard
					listItems={project.users || []}
					title={['Who are the ', <span key="span">users</span>, '?']}
				/>
				<StripedImageList
					images={[
						{
							alt: 'desktop view',
							className: 'twelve columns',
							src: 'astarte-desktop.jpg'
						},
						{
							alt: 'tablet view',
							className: 'six columns center',
							src: 'astarte-tablet.jpg'
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
							image: {
								alt: 'project detail 1',
								src: 'astarte-project-detail-01.jpg'
							},
							title: 'Project Feature 1'
						},
						{
							description:
								'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
							image: {
								alt: 'project detail 2',
								src: 'astarte-project-detail-02.jpg'
							},
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
