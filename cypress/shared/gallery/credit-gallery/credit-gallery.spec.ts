import { GallerySpec } from '../gallery.spec';
import { CreditGalleryObject } from './credit-gallery.object';

const gallerySpec = new GallerySpec();
const creditGalleryObject = new CreditGalleryObject();
export class CreditGallerySpec {
	public isСreditGalleryWorking(): void {
		describe('Тест кредитной галереи', () => {
			gallerySpec.isGalleryWorking(creditGalleryObject.creditGallery);

			it('Разворачивается и сворачивается дополнительная информация', () => {
				cy.get(creditGalleryObject.creditGallery.container)
					.find(creditGalleryObject.porgramItem)
					.find(creditGalleryObject.creditDescripition.showDescriptionButton)
					.first()
					.then(el => {
						cy.wrap(el)
							.scrollIntoView()
							.click()
							.get(creditGalleryObject.creditDescripition.descriptionBlock)
							.should('be.visible')
							.then(() => {
								cy.wrap(el)
									.click()
									.get(creditGalleryObject.creditDescripition.descriptionBlock)
									.should('not.be.visible');
							});
					});
			});
		});
	}
}
