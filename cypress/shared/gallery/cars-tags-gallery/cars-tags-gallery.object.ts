import { IGallery } from '../gallery.object';

export class CarsTagsGalleryObject {
	public tag = {
		name: 'Средний класс авто',
		selector: '.b-tag_link',
		title: '.b-category__title',
		urlTag: 'medium',
	};
	public carTagGallery: IGallery = {
		container: 'am-cars-tags',
		items: '.b-slider__item',
		left: '.b-slider__arrow.b-slider__arrow_prev',
		right: '.b-slider__arrow.b-slider__arrow_next',
	};
}
