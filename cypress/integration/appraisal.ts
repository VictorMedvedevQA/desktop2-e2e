import { urls } from '../support/urls';
import { AppraisalPage } from '../pages/appraisal/appraisal.page';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';

const formTestingSpec = new FormTestingSpec();
const appraisalPage = new AppraisalPage();
describe('Автокредит', () => {
	beforeEach(() => {
		cy.visitRoute(urls.appraisal);
	});

	// describe('Достаточно аналогов', () => {
	// 	beforeEach(() => {
	// 		appraisalPage.fillAppraisal(appraisalPage.defaultData);
	// 	});
	// describe('Форма "продать за 15 минут"', () => {
	// 	formTestingSpec.isPopupFormWorking(
	// 		appraisalPage.sellRequestForm.formLink,
	// 		appraisalPage.sellRequestForm.submitFormButton,
	// 		appraisalPage.sellRequestForm.openFormButton,
	// 		appraisalPage.refreshSellRequestForm.bind(appraisalPage),
	// 		appraisalPage.assertion.bind(appraisalPage)
	// 	);
	// });
	it('Выстреливающий попап появляется', () => {
		cy.get(appraisalPage.appraisalResult.shedule.diagram)
			.wait(5000)
			.get(appraisalPage.shootingPopupForm.formLink)
			.should('be.visible');
	});
	it('Тултип "продажа за 30 дней" виден по умолчанию', () => {
		cy.get(appraisalPage.appraisalResult.tooltipPrice.container)
			.contains('Рекомендованная рыночная цена')
			.should('be.visible');
	});
	// it('Смена тултипов', () => {

	// });
	// });
	// describe('Недостаточно аналогов', () => {
	// 	beforeEach(() => {
	// 		appraisalPage.fillAppraisal(appraisalPage.failAppraisal);
	// 	});
	// 	formTestingSpec.isFormWorking(
	// 		appraisalPage.failAppraisalForm.formLink,
	// 		appraisalPage.failAppraisalForm.submitFormButton,
	// 		appraisalPage.refreshFailAppraisalForm.bind(appraisalPage),
	// 		appraisalPage.assertion.bind(appraisalPage),
	// 		appraisalPage.successAssertion.bind(appraisalPage)
	// 	);
	// });
	describe('Нерозничное качество', () => {
		beforeEach(() => {
			appraisalPage.fillAppraisal(appraisalPage.notRetailQuality);
		});
		it('Текст на плавающей плашке', () => {
			cy.get(appraisalPage.appraisalResult.shedule.diagram)
				.get(appraisalPage.appraisalResult.shedule.floatingPanel)
				.find(appraisalPage.appraisalResult.shedule.floatingPanelText)
				.then(el => {
					const currentText = el.text();
					expect(currentText).to.equal(appraisalPage.appraisalResult.shedule.expectText);
				});
		});
	});
	describe('4 группа ликвидности', () => {
		beforeEach(() => {
			appraisalPage.fillAppraisal(appraisalPage.liquidity4th);
		});
		it('Текст на плавающей плашке', () => {
			cy.get(appraisalPage.appraisalResult.shedule.diagram)
				.get(appraisalPage.appraisalResult.shedule.floatingPanel)
				.find(appraisalPage.appraisalResult.shedule.floatingPanelText)
				.then(el => {
					const currentText = el.text();
					expect(currentText).to.equal(appraisalPage.appraisalResult.shedule.expectText);
				});
		});
	});
});
