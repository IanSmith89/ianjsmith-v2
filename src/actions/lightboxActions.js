export function closeLightbox(store) {
	store.setIsOpen(false);
}

export function openLightbox(store, photoIndex) {
	store.setPhotoIndex(photoIndex);
	store.setIsOpen(true);
}

export function setLightboxImages(store, images) {
	store.setImages(images);
}
