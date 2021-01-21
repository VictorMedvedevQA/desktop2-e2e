import { IGallery } from '../gallery.object';

export class ReviewGalleryObject {
	public galleryItems = {
		detailCarLink: '.b-card-review__subtitle',
		detailCarLinkPopup: '.b-card-review-popup__subtitle',
		dotActive: 'b-dotnav__dot_active',
		dotNav: '.b-dotnav__dot',
		giveFeedbackButton: '.b-button_center',
		moreLink: '.b-slider__item .b-card-review__text .b-link',
		reviewCardButton: '.b-slider__item .b-button',
		reviewCardPopup: '.b-card-review-popup',
		singleSlideGallery: '.b-gallery-preview_auto',
	};
	public reviewGallery: IGallery = {
		container: 'amc-section.b-section:has(div:contains(Отзывы наших покупателей))',
		items: '.b-slider__item',
		left: '.b-slider-controlls__item_prev',
		right: '.b-slider__arrow_next',
	};
}
