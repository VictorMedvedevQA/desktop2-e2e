export class CatalogPage {
	public galleries = {
		carsGalleryContainer: 'am-cars-galleries am-gallery',
		carsTagsGalleryContainer: 'am-cars-tags',
		similarGalleryContainer: 'am-cars-similar am-gallery',
		urlCheckingClickItemCarsGallery: '/car/',
	};
	public catalog = {
		hideSoldCars: '.b-button:contains(Скрыть проданные авто)',
		showSoldCars: '.b-button:contains(Показать проданные авто)',
		soldCars: '.b-card-header__title',
	};
}
