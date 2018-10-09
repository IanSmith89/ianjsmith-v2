import React from 'react';
import { observer } from 'mobx-react';
import FullImage from '../../components/FullImage';
import TextListCard from '../../components/TextListCard';
import StripedImageList from '../../components/StripedImageList';
import TextListDark from '../../components/TextListDark';
import TextListLight from '../../components/TextListLight';
import ImageList from '../../components/ImageList';

@observer
export default class WAStateParks extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<div>
				<TextListCard
					listItems={project.users || []}
					title={['Who are the ', <span key="span">users</span>, '?']}
				/>
				<FullImage
					imageAlt="early sketches"
					imageSrc="wasp-sketches.jpg"
					title="early sketches"
				/>
				<FullImage
					imageAlt="wireframes"
					imageSrc="wasp-wires.jpg"
					title="wireframes"
				/>
				<FullImage
					imageAlt="early sketches"
					imageSrc="wasp-mocks.jpg"
					title="mockups"
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
				<TextListDark
					listItems={project.takeaways || []}
					noStyle
					title={['project ', <span key="span">takeaways</span>]}
				/>
			</div>
		);
	}
}
