import { urls } from '../support/urls';
import { ReviewGallerySpec } from '../shared/gallery/review-gallery/review-gallery.spec';
import { PodborPage } from '../pages/podbor/podbor.page';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';
import { CarGallerySpec } from '../shared/gallery/car-gallery/car-gallery.spec';
import { FaqSpec } from '../shared/faq/faq.spec';

const reviewGallerySpec = new ReviewGallerySpec();
const formTestingSpec = new FormTestingSpec();
const podborPage = new PodborPage();
const carGallerySpec = new CarGallerySpec();
const faqSpec = new FaqSpec();

describe('Подбор', () => {
	beforeEach(() => {
		cy.visitRoute(urls.podbor);
	});
	reviewGallerySpec.isReviewGalleryWorking();
	carGallerySpec.isCarGalleryWorking();
	faqSpec.isFaqWorking();

	describe('Hero form', () => {
		formTestingSpec.isFormWorking(
			podborPage.heroForm.formLink,
			podborPage.heroForm.submitFormButton,
			podborPage.refreshForm.bind(podborPage),
			podborPage.failAssertion.bind(podborPage)
		);
	});

	describe('Блок "Как мы делаем осмотр и диагностику авто"', () => {
		it('Переход в каталог по кнопке "посмотреть авто в наличии"', () => {
			cy.get(podborPage.matchHow.container)
				.find(podborPage.matchHow.btnBlock)
				.find(podborPage.matchHow.showCarsBtn)
				.click()
				.url()
				.should('contain', '/cars');
		});

		describe('button "Подбор авто для меня"', () => {
			it('Кнопка скроллит страницу к форме "подобрать автомобиль"', function() {
				cy.get(podborPage.mutchCarForMe.openFormButton)
					.click()
					.get(podborPage.heroForm.formLink)
					.should('be.visible')
			});
		});
	});
});
