import { urls } from '../support/urls';
import { ProgramGallerySpec } from '../shared/gallery/program-gallery/program-gallery.spec';
import { LeasingPage } from '../pages/leasing/leasing.page';

const programGallerySpec = new ProgramGallerySpec();
const leasingPage = new LeasingPage();
describe('Лизинг', () => {
	beforeEach(() => {
		cy.visitRoute(urls.leasing);
	});
	programGallerySpec.isProgramGalleryWorking(leasingPage.leasingGallery);
});
