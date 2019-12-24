import { SingleSlideGalleryObject } from './single-slide-gallery.object';
import { GallerySpec } from '../gallery.spec';

const gallerySpec = new GallerySpec();
const singleSlideGalleryObject = new SingleSlideGalleryObject();
export class SingleSlideGallerySpec {
	public isSingleSlideGalleryWorking(container: string): void {
		describe('Тест галереи отзывов', () => {
			gallerySpec.isGalleryWorking(singleSlideGalleryObject.singleSlideGallery);
		});
	}
}
