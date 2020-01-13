import { urls } from '../support/urls';
import { AppraisalPage } from '../pages/appraisal/appraisal.page';
const appraisalPage = new AppraisalPage();
describe('Автокредит', () => {
	beforeEach(() => {
		cy.visitRoute(urls.appraisal);
	});
	it('Заполнение оценки', () => {
		appraisalPage.fillAppraisal(appraisalPage.defaultData);
	});
});
