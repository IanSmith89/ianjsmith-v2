import React from 'react';
import { observer } from 'mobx-react';
import DigitalProjectHeader from '../../components/DigitalProjectHeader';
import TextListCard from '../../components/TextListCard';
import TextListDark from '../../components/TextListDark';
import TextListLight from '../../components/TextListLight';

@observer
export default class DreamStream extends React.Component {
	render() {
		const { project } = this.props;

		return (
			<div>
				<DigitalProjectHeader project={project} />
				<TextListCard
					listItems={project.users || []}
					title={['Who are the ', <span key="span">users</span>, '?']}
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
			</div>
		);
	}
}
