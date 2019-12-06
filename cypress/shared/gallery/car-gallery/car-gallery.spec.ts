import { urls } from '../../../support/urls';
import { GallerySpec } from '../gallery.spec';
import { CarGalleryObject } from './car-gallery.object';

const carGalleryObject = new CarGalleryObject();
const gallerySpec = new GallerySpec();

export class CarGallerySpec {
	public isCarGalleryWorking(): void {
		describe('Тест галереи "Авто в наличии"', () => {
			gallerySpec.isGalleryWorking(carGalleryObject.carGallery);
		});
	}
}
