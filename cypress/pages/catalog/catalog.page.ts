import { IGallery } from '../../shared/gallery/gallery.object';

export class CatalogPage {
	public urlCheckingClickItemCarsGallery: string = '/car/';

	public catalog = {
		hideSoldCars: '.b-button:contains(Скрыть проданные авто)',
		showSoldCars: '.b-button:contains(Показать проданные авто)',
		soldCars: '.b-card-header__title',
	};
	public similarGallery: IGallery = {
		container: 'am-cars-similar am-gallery',
		items: '.b-slider__item',
		left: '.b-slider__arrow.b-slider__arrow_prev',
		right: '.b-slider__arrow.b-slider__arrow_next',
	};
	public carsGallery: IGallery = {
		container: 'am-cars-galleries am-gallery',
		items: '.b-slider__item',
		left: '.b-slider__arrow.b-slider__arrow_prev',
		right: '.b-slider__arrow.b-slider__arrow_next',
	};
}
