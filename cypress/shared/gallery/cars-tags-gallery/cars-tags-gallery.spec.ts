import { urls } from '../../../support/urls';
import { GallerySpec } from '../gallery.spec';
import { CarsTagsGalleryObject } from '../cars-tags-gallery/cars-tags-gallery.object';

const carsTagsGalleryObject = new CarsTagsGalleryObject();
const gallerySpec = new GallerySpec();
export class CarsTagsGallerySpec {
	public isCarsTagsGalleryWorking(): void {
		describe('Тест галереи подборок', () => {
			beforeEach(() => {
				cy.server()
					.visitRoute(urls.catalog.main)
					.get(carsTagsGalleryObject.carTagGallery.items)
					.contains(carsTagsGalleryObject.tag.name)
					.find(carsTagsGalleryObject.tag.title)
					.click();
			});

			it('Появился тег', () => {
				cy.get(carsTagsGalleryObject.tag.selector)
					.contains(carsTagsGalleryObject.tag.name)
					.should('be.visible');
			});

			it('Изменился урл', () => {
				cy.url().should('contains', carsTagsGalleryObject.tag.urlTag);
			});

			gallerySpec.isGalleryWorking(carsTagsGalleryObject.carTagGallery);
		});
	}
}
