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

	public isGalleryWithoutDotsWorking(gallery: IGallery): void {
		describe('Тест галереи, без точек', () => {

			it('Скролл по стрелке без точек', () => {
				galleryObject.checkItemChangeByArrowWithoutDot(gallery);
			});
		});
	}

	public checkingClickItemRedirect(gallery: IGallery, urlAfter: string) {
		it('Переход по клику на galleryItem', () => {
			cy.findFirstVisible(gallery.container, gallery.items)
				.click('top')
				.url()
				.should('contains', urlAfter);
		});
	}
}
