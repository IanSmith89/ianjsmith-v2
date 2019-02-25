import { action, computed, observable } from 'mobx';

class LightboxStore {
	@observable
	photoIndex = 0;
	@observable
	images = [];
	@observable
	isOpen = false;

	@computed
	get imageCaption() {
		return this.images.length ? this.images[this.photoIndex].caption : '';
	}

	@computed
	get mainSrc() {
		return this.images.length ? this.images[this.photoIndex].src : '';
	}

	@action
	setImages(images) {
		this.images = images;
	}

	@action
	setIsOpen(isOpen) {
		this.isOpen = isOpen;
	}

	@action
	setPhotoIndex(photoIndex) {
		this.photoIndex = photoIndex;
	}
}

const lightboxStore = new LightboxStore();

export default lightboxStore;
