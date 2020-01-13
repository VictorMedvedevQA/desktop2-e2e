import { urls } from '../support/urls';
import { ProgramGallerySpec } from '../shared/gallery/program-gallery/program-gallery.spec';
import { LeasingPage } from '../pages/leasing/leasing.page';
import { LeasingFilterSpec } from '../shared/filter/leasing-filter/leasing-filter.spec';
import { filterFields } from '../shared/filter/leasing-filter/leasing-filter-fields';

const leasingFilterSpec = new LeasingFilterSpec();
const programGallerySpec = new ProgramGallerySpec();
const leasingPage = new LeasingPage();

describe('Лизинг', () => {
	beforeEach(() => {
		cy.visitRoute(urls.leasing);
	});
	programGallerySpec.isProgramGalleryWorking(leasingPage.leasingGallery);
	leasingFilterSpec.isLeasingFilterWorking(filterFields);
});
