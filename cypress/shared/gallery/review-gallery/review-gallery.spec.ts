import { ReviewGalleryObject } from '../review-gallery/review-gallery.object';
const reviewGalleryObject = new ReviewGalleryObject();
export class ReviewGallerySpec {
	public isReviewGalleryWorking(container: string): void {
		describe('Тест галереи отзывов', () => {
			it('Скролл по стрелке', () => {
				reviewGalleryObject.checkItemChangeByArrow();
			});

			it('Переключение по точкам', () => {
				reviewGalleryObject.checkItemChangeByDot();
			});

			it('Открытие попапа полного текста комментария', () => {
				cy.get(reviewGalleryObject.galleryItems.moreLink)
					.first()
					.click()
					.get(reviewGalleryObject.galleryItems.reviewCardPopup)
					.should('be.visible');
			});

			it('Переход на страницу отзывов', () => {
				cy.get(reviewGalleryObject.galleryItems.dotNav)
					.last()
					.click()
					.get(reviewGalleryObject.galleryItems.reviewCardButton)
					.click()
					.get(reviewGalleryObject.galleryItems.giveFeedbackButton)
					.should('be.visible');
			});

			it('Переход на детальную страницу авто', () => {
				cy.get(reviewGalleryObject.galleryItems.detailCarLink)
					.first()
					.click()
					.get(reviewGalleryObject.galleryItems.singleSlideGallery)
					.should('be.visible');
			});

			it('Переход на детальную страницу авто из попапа', () => {
				cy.get(reviewGalleryObject.galleryItems.moreLink)
					.first()
					.click()
					.get(reviewGalleryObject.galleryItems.reviewCardPopup)
					.find(reviewGalleryObject.galleryItems.detailCarLinkPopup)
					.click()
					.get(reviewGalleryObject.galleryItems.singleSlideGallery)
					.should('be.visible');
			});
		});
	}
}
