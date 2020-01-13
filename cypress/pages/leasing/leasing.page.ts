import { IGallery } from '../../shared/gallery/gallery.object';

export class LeasingPage {
	public leasingGallery: IGallery = {
		container: 'leasing-gallery am-gallery',
		items: '.b-slider__item',
		left: '.b-slider__arrow.b-slider__arrow_prev',
		right: '.b-slider__arrow.b-slider__arrow_next',
	};
}
