import { urls } from '../support/urls';
import { ReviewGallerySpec } from '../shared/gallery/review-gallery/review-gallery.spec';
import { ObmenPage } from '../pages/obmen/obmen.page';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';
import { CarGallerySpec } from '../shared/gallery/car-gallery/car-gallery.spec';
import { FaqSpec } from '../shared/faq/faq.spec';

const reviewGallerySpec = new ReviewGallerySpec();
const formTestingSpec = new FormTestingSpec();
const obmenPage = new ObmenPage();
const carGallerySpec = new CarGallerySpec();
const faqSpec = new FaqSpec();

describe('Обмен', () => {
	beforeEach(() => {
		cy.visitRoute(urls.obmen);
	});
	reviewGallerySpec.isReviewGalleryWorking();
	carGallerySpec.isCarGalleryWorking();
	faqSpec.isFaqWorking();

	describe('Hero form', () => {
		formTestingSpec.isFormWorking(
			obmenPage.heroForm.formLink,
			obmenPage.heroForm.submitFormButton,
			obmenPage.refreshForm.bind(obmenPage),
			obmenPage.failAssertion.bind(obmenPage)
		);
	});

	describe('Inline form', () => {
		formTestingSpec.isFormWorking(
			obmenPage.inlineForm.formLink,
			obmenPage.inlineForm.submitFormButton,
			obmenPage.refreshForm.bind(obmenPage),
			obmenPage.failAssertion.bind(obmenPage)
		);
	});
});
