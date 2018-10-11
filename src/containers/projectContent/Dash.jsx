import React from 'react';
import { observer } from 'mobx-react';
import DigitalProjectHeader from '../../components/DigitalProjectHeader';
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
				<DigitalProjectHeader project={project} />
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
								'The staff and agents at Paragon regularly filter their data to determine trends, analyze performance, and quickly retrieve datasets. I was able to implement modern interface controls that aided in that process and helped users accurately filter information and easily see what were the applied filter constraints.',
							images: [
								{
									alt: 'paragon dash filtering',
									src: 'dash-desktop.jpg'
								}
							],
							title: 'simple data filtering'
						},
						{
							description:
								'I implemented a drag and drop interface that determined the order of featured blog posts on the public website. We fine tuned the functionality with the blog managers and ensured that all of their needs were handled and presented properly.',
							images: [
								{
									alt: 'paragon dash blog drag and drop',
									src: 'dash-trends.jpg'
								}
							],
							title: 'drag & drop blog features'
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
