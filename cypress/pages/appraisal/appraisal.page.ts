import { FormTestingObject } from '../../shared/form-testing/form-testing.object';
const formTestingObject = new FormTestingObject();

export interface IAppraisalParameter {
	name?: string;
	isHidden: boolean;
	type: 'item' | 'input';
	data: string;
}

export class AppraisalPage {
	public defaultData: IAppraisalParameter[] = [
		{ name: 'make', isHidden: true, type: 'item', data: 'Ford' },
		{ name: 'model', isHidden: true, type: 'item', data: 'Mondeo' },
		{ name: 'year', isHidden: false, type: 'item', data: '2014' },
		{ name: 'generation', isHidden: false, type: 'item', data: 'IV Рестайлинг' },
		{ name: 'bodyType', isHidden: false, type: 'item', data: 'Седан' },
		{ isHidden: false, type: 'item', data: 'Автомат' },
		{ isHidden: false, type: 'item', data: 'Бензиновый' },
		{ isHidden: false, type: 'item', data: 'Передний' },
		{ isHidden: false, type: 'input', data: '123' },
		{ isHidden: false, type: 'input', data: '123' },
		{ isHidden: false, type: 'item', data: 'Базовая' },
		{ name: 'city', isHidden: false, type: 'item', data: 'Краснодар' },
	];
	public liquidity4th: IAppraisalParameter[] = [
		{ name: 'make', isHidden: true, type: 'item', data: 'Kia' },
		{ name: 'model', isHidden: true, type: 'item', data: 'Rio' },
		{ name: 'year', isHidden: false, type: 'item', data: '2014' },
		{ name: 'generation', isHidden: false, type: 'item', data: 'III' },
		{ name: 'bodyType', isHidden: false, type: 'item', data: 'Седан' },
		{ isHidden: false, type: 'item', data: 'Автомат' },
		{ isHidden: false, type: 'item', data: 'Бензиновый' },
		{ isHidden: false, type: 'item', data: 'Передний' },
		{ isHidden: false, type: 'input', data: '123' },
		{ isHidden: false, type: 'input', data: '123' },
		{ isHidden: false, type: 'item', data: 'Базовая' },
		{ name: 'city', isHidden: false, type: 'item', data: 'Ростов' },
	];
	public notRetailQuality: IAppraisalParameter[] = [
		{ name: 'make', isHidden: true, type: 'item', data: 'Mercedes-Benz' },
		{ name: 'model', isHidden: true, type: 'item', data: 'S-klasse' },
		{ name: 'year', isHidden: false, type: 'item', data: '2019' },
		{ name: 'generation', isHidden: false, type: 'item', data: 'III (C257)' },
		{ name: 'bodyType', isHidden: false, type: 'item', data: 'Седан' },
		{ isHidden: false, type: 'item', data: 'Автомат' },
		{ isHidden: false, type: 'item', data: 'Бензиновый' },
		{ isHidden: false, type: 'item', data: 'Передний' },
		{ isHidden: false, type: 'input', data: '123' },
		{ isHidden: false, type: 'input', data: '123' },
		{ isHidden: false, type: 'item', data: 'Базовая' },
		{ name: 'city', isHidden: false, type: 'item', data: 'Москва' },
	];
	public failAppraisal: IAppraisalParameter[] = [
		{ name: 'make', isHidden: true, type: 'item', data: 'Buick' },
		{ name: 'model', isHidden: true, type: 'item', data: 'Rendezvous' },
		{ name: 'year', isHidden: false, type: 'item', data: '2004' },
		{ name: 'generation', isHidden: false, type: 'item', data: 'Rendez' },
		{ name: 'bodyType', isHidden: false, type: 'item', data: 'Внедорожник' },
		{ isHidden: false, type: 'item', data: 'Автомат' },
		{ isHidden: false, type: 'item', data: 'Бензиновый' },
		{ isHidden: false, type: 'item', data: 'Передний' },
		{ isHidden: false, type: 'input', data: '123' },
		{ isHidden: false, type: 'input', data: '123' },
		{ isHidden: false, type: 'item', data: 'Базовая' },
		{ name: 'city', isHidden: false, type: 'item', data: 'Краснодар' },
	];
	public itemsList = {
		itemText: '.b-link-item__text',
		showAll: '.b-button:contains(Показать все)',
		inputValue: '[formcontrolname="value"]',
		submitButton: '[type="submit"]',
	};
	public appraisalResult = {
		shedule: {
			diagram: 'am-appraisal-diagram',
			appraisalReport: 'am-appraisal-report .b-button_h50',
			fastSelling: 'am-appraisal-sell-request am-button',
			popup: '.b-popup',
			thirtyDaysDot: 'am-graph-dot[period="30"]',
			sixtyDaysdot: 'am-graph-dot[period="60"]',
			thirtyTooltipPrice: '.b-estimate-graf__tooltip-title.b-h2',
			closePopup: '.b-popup-close.b-icon-close',
			benefits: 'am-appraisal-benefits',
			floatingPanel: 'am-floating-panel',
			floatingPanelText: '.b-h4',
			expectText: 'Получить предложение о продаже Вашего авто',
		},
		tooltipPrice: {
			container: 'am-tooltip-price',
		},
		fail: {
			result: 'am-appraisal-fail',
			searchOptions: 'am-tag',
			closeSearchOptions: 'am-tag .b-tag-brick__icon',
		},
	};

	public fillAppraisal(data: IAppraisalParameter[]) {
		for (const parameter in data) {
			if (parameter) {
				cy.then(() => {
					if (data[parameter].isHidden) {
						cy.get(this.itemsList.showAll).click();
					}
				}).then(() => {
					switch (data[parameter].type) {
						case 'item':
							{
								cy.get(this.itemsList.itemText)
									.contains(data[parameter].data)
									.click();
							}
							break;
						case 'input':
							{
								cy.get(this.itemsList.inputValue)
									.type(data[parameter].data)
									.get(this.itemsList.submitButton)
									.click();
							}
							break;
						default:
							throw new Error(`Не найдены дейстия для типа ${data[parameter].type}`);
					}
				});
			}
		}
	}
	public successPopup = '.b-form_success';
	public closePopupButoon = '.b-popup-close';

	public failAppraisalForm = {
		formLink: 'am-appraisal-fail form',
		submitFormButton: '[type="submit"]',
	};

	public sellRequestForm = {
		formLink: 'am-popup .b-popup',
		openFormButton: `am-button:contains(Продать)`,
		submitFormButton: 'am-button:contains(Продать авто)',
	};
	public shootingPopupForm = {
		formLink: 'am-popup .b-popup',
	};
	public refreshSellRequestForm() {
		cy.get('body').then(body => {
			if (body.find(this.sellRequestForm.formLink).length > 0) {
				cy.get(this.closePopupButoon)
					.click()
					.get(this.sellRequestForm.openFormButton)
					.click();
			} else {
				cy.get(this.sellRequestForm.openFormButton).click();
			}
		});
	}
	public refreshFailAppraisalForm() {
		formTestingObject.clearAllFiealds(this.failAppraisalForm.formLink);
	}
	public successAssertion() {
		cy.get(this.successPopup).should('be.visible');
	}
	public assertion() {
		cy.get(this.successPopup).should('not.exist');
	}
}
