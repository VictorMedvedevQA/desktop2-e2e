import { urls } from '../support/urls';
import { FaqSpec } from '../shared/faq/faq.spec';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';
import { AutocreditPage } from '../pages/autocredit/autocredit.page';
import { GallerySpec } from '../shared/gallery/gallery.spec';
import { CreditGallerySpec } from '../shared/gallery/credit-gallery/credit-gallery.spec';
import { FilterSpec } from '../shared/filter/filter.spec';

const faqSpec = new FaqSpec();
const formTestingSpec = new FormTestingSpec();
const autocreditPage = new AutocreditPage();
const gallerySpec = new GallerySpec();
const creditGallerySpec = new CreditGallerySpec();
const filterSpec = new FilterSpec();

describe('Автокредит', () => {
	beforeEach(() => {
		cy.visitRoute(urls.autocredit.main);
	});
	faqSpec.isFaqWorking();
	creditGallerySpec.isСreditGalleryWorking();
});
