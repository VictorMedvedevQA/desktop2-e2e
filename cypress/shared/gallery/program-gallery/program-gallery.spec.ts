import { GallerySpec } from '../gallery.spec';
import { ProgramGalleryObject } from './program-gallery.object';
import { IGallery } from '../gallery.object';

const gallerySpec = new GallerySpec();
const programGalleryObject = new ProgramGalleryObject();
export class ProgramGallerySpec {
	public isProgramGalleryWorking(gallery: IGallery): void {
		describe('Тест кредитной галереи', () => {
			gallerySpec.isGalleryWorking(gallery);

			it('Разворачивается и сворачивается дополнительная информация', () => {
				cy.get(gallery.container)
					.find(programGalleryObject.porgramItem)
					.find(programGalleryObject.programDescripition.showDescriptionButton)
					.first()
					.click()
					.get(programGalleryObject.programDescripition.descriptionBlock)
					.should('be.visible')
					.get(gallery.container)
					.find(programGalleryObject.porgramItem)
					.first()
					.find(programGalleryObject.programDescripition.showDescriptionButton)
					.click('bottom')
					.get(programGalleryObject.programDescripition.descriptionBlock)
					.should('not.exist');
			});
		});
	}
}
