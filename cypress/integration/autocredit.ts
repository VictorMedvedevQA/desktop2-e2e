import { urls } from '../support/urls';
import { FaqSpec } from '../shared/faq/faq.spec';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';
import { AutocreditPage } from '../pages/autocredit/autocredit.page';
import { ProgramGallerySpec } from '../shared/gallery/program-gallery/program-gallery.spec';
import { AutocreditFilterSpec } from '../shared/filter/autocredit-filter/autocredit-filter.spec';
import { filterFields } from '../shared/filter/autocredit-filter/autocredit-filter-fields';

const faqSpec = new FaqSpec();
const formTestingSpec = new FormTestingSpec();
const autocreditPage = new AutocreditPage();
const programGallerySpec = new ProgramGallerySpec();
const autocreditFilterSpec = new AutocreditFilterSpec();
describe('Автокредит', () => {
	beforeEach(() => {
		cy.visitRoute(urls.autocredit.main);
	});
	autocreditFilterSpec.isAutocreditFilterWorking(filterFields);
	faqSpec.isFaqWorking();
	programGallerySpec.isProgramGalleryWorking(autocreditPage.creditGallery);
	describe('Заявка  после ЧАВО', () => {
		formTestingSpec.isPopupFormWorking(
			autocreditPage.mainPopupForm.formLink,
			autocreditPage.mainPopupForm.submitFormButton,
			autocreditPage.mainPopupForm.openFormButton,
			autocreditPage.refreshMainPopupForm.bind(autocreditPage),
			autocreditPage.assertion.bind(autocreditPage)
		);
	});
});
