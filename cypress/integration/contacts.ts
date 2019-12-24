import { urls } from '../support/urls';
import { SingleSlideGallerySpec } from '../shared/gallery/single-slide-gallery/single-slide-gallery.spec';
const singleSlideGallerySpec = new SingleSlideGallerySpec();
describe('Страница контактов по городам ', () => {
	beforeEach(() => {
		cy.visitRoute(urls.contacts.moscow);
	});
	// singleSlideGallerySpec.isSingleSlideGalleryWorking();
});
