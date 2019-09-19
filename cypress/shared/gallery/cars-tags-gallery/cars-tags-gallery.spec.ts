import { urls } from '../../../support/urls';
import { GalleryObject } from '..//gallery.object';
import { CarsTagsGalleryObject } from '../cars-tags-gallery/cars-tags-gallery.object';

const galleryObject = new GalleryObject();
const carsTagsGalleryObject = new CarsTagsGalleryObject();

export class CarsTagsGallerySpec {
	public isCarsTagsGalleryWorking(container: string): void {
		describe('Тест галереи подборок', () => {
			beforeEach(() => {
				cy.server()
					.visitRoute(urls.catalog.main)
					.get(container)
					.find(galleryObject.galleryItems.itemsVisible)
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
		});
	}
}
