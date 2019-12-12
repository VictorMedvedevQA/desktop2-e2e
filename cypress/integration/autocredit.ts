import { urls } from '../support/urls';
import { FaqSpec } from '../shared/faq/faq.spec';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';
import { AutocreditPage } from '../pages/autocredit/autocredit.page';
import { GallerySpec } from '../shared/gallery/gallery.spec';
import { ProgramGallerySpec } from '../shared/gallery/program-gallery/program-gallery.spec';
import { FilterSpec } from '../shared/filter/filter.spec';

const faqSpec = new FaqSpec();
const formTestingSpec = new FormTestingSpec();
const autocreditPage = new AutocreditPage();
const gallerySpec = new GallerySpec();
const programGallerySpec = new ProgramGallerySpec();
const filterSpec = new FilterSpec();

describe('Автокредит', () => {
	beforeEach(() => {
		cy.visitRoute(urls.autocredit.main);
	});
	faqSpec.isFaqWorking();
	programGallerySpec.isProgramGalleryWorking(autocreditPage.creditGallery);
	describe('Заявка  после ЧАВО', () => {
		formTestingSpec.isPopupFormWorking(
			autocreditPage.mainPopupForm.formLink,
			autocreditPage.mainPopupForm.submitFormButton,
			autocreditPage.mainPopupForm.openFormButton,
			autocreditPage.refreshmainPopupForm.bind(autocreditPage),
			autocreditPage.assertion.bind(autocreditPage)
		);
	});
});
