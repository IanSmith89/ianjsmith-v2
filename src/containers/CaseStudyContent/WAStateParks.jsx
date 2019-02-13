import React from 'react';
import { inject, observer } from 'mobx-react';
import ImageCard from '../../components/ImageCard';

@inject('actions', 'lightboxStore')
@observer
export default class WAStateParks extends React.Component {
	images = [];

	componentDidMount() {
		this.props.actions.setLightboxImages(
			this.props.lightboxStore,
			this.images
		);
	}

	componentWillUnmount() {
		this.props.actions.setLightboxImages(this.props.lightboxStore, []);
	}

	render() {
		const { actions, lightboxStore, project } = this.props;

		return project.designProcess ? (
			<div className="text-section">
				<div className="row">
					<div className="twelve columns">
						<h3 className="section-label">Design Process</h3>
						<div className="underline" />
					</div>
				</div>
			</div>
		) : null;
	}
}
