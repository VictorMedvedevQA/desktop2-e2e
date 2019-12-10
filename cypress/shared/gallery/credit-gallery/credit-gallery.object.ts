import { IGallery } from '../gallery.object';

export class CreditGalleryObject {
	public creditGallery: IGallery = {
		container: 'am-credit-gallery am-gallery',
		items: '.b-slider__item',
		left: '.b-slider__arrow.b-slider__arrow_prev',
		right: '.b-slider__arrow.b-slider__arrow_next',
	};
	public creditDescripition = {
		showDescriptionButton: '.b-automap-link__icon',
		descriptionBlock: '.b-credit-description',
	};
	public porgramItem = '.b-credit-item';
}
