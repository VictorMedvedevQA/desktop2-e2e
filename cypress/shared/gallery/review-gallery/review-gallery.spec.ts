import { ReviewGalleryObject } from '../review-gallery/review-gallery.object';
import { GallerySpec } from '../gallery.spec';

const gallerySpec = new GallerySpec();
const reviewGalleryObject = new ReviewGalleryObject();
export class ReviewGallerySpec {
	public isReviewGalleryWorking(): void {
		describe('Тест галереи отзывов', () => {
			gallerySpec.isGalleryWorking(reviewGalleryObject.reviewGallery);

			it('Открытие попапа полного текста комментария', () => {
				cy.get(reviewGalleryObject.reviewGallery.container)
					.find(reviewGalleryObject.galleryItems.moreLink)
					.first()
					.click()
					.get(reviewGalleryObject.galleryItems.reviewCardPopup)
					.should('be.visible');
			});

			it('Переход на страницу отзывов', () => {
				cy.get(reviewGalleryObject.reviewGallery.container)
					.find(reviewGalleryObject.galleryItems.dotNav)
					.last()
					.click()
					.get(reviewGalleryObject.galleryItems.reviewCardButton)
					.click()
					.get(reviewGalleryObject.galleryItems.giveFeedbackButton)
					.should('be.visible');
			});

			it('Переход на детальную страницу авто', () => {
				cy.get(reviewGalleryObject.reviewGallery.container)
					.find(reviewGalleryObject.galleryItems.detailCarLink)
					.first()
					.click()
					.get(reviewGalleryObject.galleryItems.singleSlideGallery)
					.should('be.visible');
			});

			it('Переход на детальную страницу авто из попапа', () => {
				cy.get(reviewGalleryObject.reviewGallery.container)
					.find(reviewGalleryObject.galleryItems.moreLink)
					.contains('Подробнее')
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
