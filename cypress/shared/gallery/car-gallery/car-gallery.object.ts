import { IGallery } from '../gallery.object';

export class CarGalleryObject {
	public carGallery: IGallery = {
		container: 'am-gallery .b-slider:first',
		items: '.b-slider__item',
		left: '.b-slider__arrow.b-slider__arrow_prev',
		right: '.b-slider__arrow.b-slider__arrow_next',
	};
}
