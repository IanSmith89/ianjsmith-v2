import React from 'react';
import { inject, observer } from 'mobx-react';
import Lightbox from 'react-image-lightbox';

@inject('actions', 'lightboxStore')
@observer
export default class ImageLightbox extends React.Component {
	handleCloseRequest() {
		this.props.actions.closeLightbox(this.props.lightboxStore);
	}

	render() {
		const { imageCaption, isOpen, mainSrc } = this.props.lightboxStore;

		return isOpen ? (
			<Lightbox
				// animationOnKeyInput
				mainSrc={mainSrc}
				// nextSrc={
				// 	images[
				// 		(photoIndex + 1) % images.length
				// 	].src
				// }
				// prevSrc={
				// 	images[
				// 		(photoIndex + images.length - 1) %
				// 			images.length
				// 	].src
				// }
				imageCaption={imageCaption}
				onCloseRequest={this.handleCloseRequest}
				// onMovePrevRequest={() =>
				// 	setPhotoIndex(
				// 		(photoIndex + images.length - 1) %
				// 			images.length
				// 	)
				// }
				// onMoveNextRequest={() =>
				// 	setPhotoIndex(
				// 		(photoIndex + 1) % images.length
				// 	)
				// }
			/>
		) : null;
	}
}
