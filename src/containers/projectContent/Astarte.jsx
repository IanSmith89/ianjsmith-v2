import React from 'react';
import { observer } from 'mobx-react';
import DigitalProjectHeader from '../../components/DigitalProjectHeader';
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
				<DigitalProjectHeader project={project} />
				<FullImage
					alt="early sketches"
					src="astarte-sketches.jpg"
					title="early sketches"
				/>
				<TextListCard
					listItems={project.users || []}
					title={['Who are the ', <span key="span">users</span>, '?']}
				/>
				<StripedImageList
					images={[
						{
							alt: 'astarte intranet desktop screenshot',
							className: 'twelve columns',
							src: 'astarte-desktop.jpg'
						},
						{
							alt: 'astarte intranet tablet screenshot',
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
								'One of the most common tasks of the lab technicians is moving vials around to various racks and freezers as they go through creation and testing. The staff at Astarte needed visual reference to the vial location, so we used color to delineate between different groups and products that most often looked the exact same in the actual freezers.',
							images: [
								{
									alt: 'project detail 1',
									src: 'astarte-project-detail-01.jpg'
								}
							],
							title: 'easily moving inventory'
						},
						{
							description:
								'Recording changes and taking notes was essential and needed to be very flexible and possible for specific vials or groups of vials. It was also important to track the statuses of each vial as they went through testing and update the e-commerce website with each status change.',
							images: [
								{
									alt: 'project detail 2',
									src: 'astarte-project-detail-02.jpg'
								}
							],
							title: 'updating product information'
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
