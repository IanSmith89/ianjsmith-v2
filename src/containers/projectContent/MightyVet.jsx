import React from 'react';
import { observer } from 'mobx-react';
import DigitalProjectHeader from '../../components/DigitalProjectHeader';

@observer
export default class Topshelf extends React.Component {
	render() {
		const { project } = this.props;

		return <DigitalProjectHeader project={project} />;
	}
}
