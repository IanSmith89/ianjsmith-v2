import React from 'react';
import { observer } from 'mobx-react';
import DigitalProjectHeader from '../../components/DigitalProjectHeader';
import FullImage from '../../components/FullImage';
import TextListCard from '../../components/TextListCard';
import TextListDark from '../../components/TextListDark';
import TextListLight from '../../components/TextListLight';

@observer
export default class WAStateParks extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<div>
				<DigitalProjectHeader project={project} />
				<TextListCard
					listItems={project.users || []}
					title={['Who are the ', <span key="span">users</span>, '?']}
				/>
				<FullImage
					alt="early sketches"
					src="wasp-sketches.jpg"
					title="early sketches"
				/>
				<FullImage
					alt="wireframes"
					src="wasp-wires.jpg"
					title="wireframes"
				/>
				<FullImage
					alt="early sketches"
					src="wasp-mocks.jpg"
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
