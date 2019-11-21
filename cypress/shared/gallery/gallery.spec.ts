import { GalleryObject, IGallery } from './gallery.object';

const galleryObject = new GalleryObject();

export class GallerySpec {
	public isGalleryWorking(gallery: IGallery): void {
		describe('Тест галереи ', () => {
			beforeEach(() => {
				cy.findFirstVisible(gallery.container, gallery.items).scrollIntoView();
			});

			it('Скролл по стрелке', () => {
				galleryObject.checkItemChangeByArrow(gallery);
			});

			it('Переключение по точкам', () => {
				galleryObject.checkItemChangeByDot(gallery);
			});
		});
	}

	public checkingClickItemRedirect(gallery: IGallery, urlAfter: string) {
		it('Переход по клику на galleryItem', () => {
			cy.findFirstVisible(gallery.container, gallery.items)
				.click('top')
				.wait('@getAuctionIndividual')
				.url()
				.should('contains', urlAfter);
		});
	}
}
