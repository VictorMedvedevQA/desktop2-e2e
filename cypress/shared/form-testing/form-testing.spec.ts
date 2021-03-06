import { FormTestingObject } from './form-testing.object';
import { OnlyDev } from '../action';

const formTestingObject = new FormTestingObject();

export class FormTestingSpec {
	public isFormWorking(link: string, submit: string, refreshForm: any, failAssertion: any, successAssertion?: any) {
		describe('Общий тест формы', () => {
			OnlyDev.it('Проверяем отправку без обязательных полей', () => {
				formTestingObject.submitWithoutRequiredFields(link, refreshForm, failAssertion, submit);
			});
			if (successAssertion) {
				OnlyDev.it('Корректная отправка формы', () => {
					cy.then(() => {
						formTestingObject.sendValidData(link, submit);
						successAssertion();
					});
				});
			}
		});
	}

	public isPopupFormWorking(
		link: string,
		submit: string,
		openFormButton: string,
		refreshForm: any,
		failAssertion: any,
		successAssertion?: any
	) {
		describe('Попап', () => {
			it('Форма закрывается по крестику', () => {
				cy.then(() => {
					refreshForm();
					formTestingObject.closingPopupForm(link);
				});
			});
		});

		describe('Тест формы в попапе', () => {
			beforeEach(() => {
				cy.then(() => {
					refreshForm();
				});
			});
			this.isFormWorking(link, submit, refreshForm, failAssertion, successAssertion);
		});
	}
}
