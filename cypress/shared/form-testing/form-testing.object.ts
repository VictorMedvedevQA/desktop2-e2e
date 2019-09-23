/* tslint:disable */
export enum formFieldType {
	input = 'input',
	select = 'select',
	chekbox = 'chekbox',
	textarea = 'textarea',
}

export interface IForm {
	type: formFieldType;
	name: string;
}
export interface IFormData {
	name: string;
	data: string;
}

export const formFields: IForm[] = [
	{ type: formFieldType.chekbox, name: 'chekbox' },
	{ type: formFieldType.input, name: 'name' },
	{ type: formFieldType.input, name: 'phone' },
	{ type: formFieldType.input, name: 'agreement' },
	{ type: formFieldType.input, name: 'check' },
	{ type: formFieldType.input, name: 'email' },
	{ type: formFieldType.input, name: 'password' },
	{ type: formFieldType.input, name: 'username' },
	{ type: formFieldType.input, name: 'confirm' },
	{ type: formFieldType.input, name: 'phoneNumber' },
	{ type: formFieldType.input, name: 'code' },
];

export const validData: IFormData[] = [
	{ name: 'name', data: 'Вася' },
	{ name: 'phone', data: '0000000000' },
	{ name: 'email', data: 'rbarinov@gmail.com' },
	{ name: 'password', data: '1' },
	{ name: 'username', data: 'rbarinov@gmail.com' },
	{ name: 'confirm', data: '1' },
	{ name: 'phoneNumber', data: '00000000111' },
	{ name: 'code', data: '0000' },
];

export class FormTestingObject {
	formButtons = {
		successPopup: 'amm-success-popup',
		closePopup: '.b-popup-close',
		errorField: 'ng-invalid',
		inputInvalid: '.b-input_invalid',
		checked: 'aml-checkbox .b-checkbox__inner_checked',
	};

	createFieldsList(link: string) {
		let fieldList: IForm[] = [];
		cy.get(link)
			.find('[formcontrolname]')
			.each(field => {
				let a = field.attr('formcontrolname');
				let el = formFields.find(field => field.name === a);
				if (el) {
					fieldList.push(el);
				}
			});
		return fieldList;
	}

	fillElements(link: string, fieldsList: IForm[], data: IFormData[]) {
		cy.get(link).then(() => {
			for (let field in fieldsList) {
				this.fillElement(link, fieldsList[field].name, data);
			}
		});
	}

	fillElement(link: string, fieldName: string, data: IFormData[]) {
		let el = data.find(field => field.name === fieldName);
		cy.then(() => {
			if (el) {
				cy.get(link)
					.find('[formcontrolname="' + fieldName + '"]')
					.parent()
					.find('input')
					.type(el.data);
			}
		});
	}

	submitForm(link: string, submit: string) {
		cy.get(link)
			.find(submit)
			.first()
			.scrollIntoView()
			.click();
	}

	sendValidData(link: string, submit: string) {
		cy.then(() => {
			this.fillElements(link, this.createFieldsList(link), validData);
		}).then(() => {
			this.submitForm(link, submit);
		});
	}

	openPopupForm(link: string, openFormButton: string) {
		cy.get(openFormButton)
			.click()
			.get(link)
			.should('be.visible');
	}

	closingPopupForm(link: string) {
		cy.get(link)
			.find(this.formButtons.closePopup)
			.click()
			.get(link)
			.should('be.not.visible');
	}

	submitWithoutRequiredFields(link: string, submit: string, refreshForm: any, assertion: any) {
		cy.then(() => {
			let allFieldsArray: IForm[] = this.createFieldsList(link);
			cy.then(() => {
				allFieldsArray.forEach(elReq => {
					for (let elAllFields in allFieldsArray) {
						if (elReq.name === allFieldsArray[elAllFields].name) {
							continue;
						}
						cy.then(() => {
							this.fillElement(link, allFieldsArray[elAllFields].name, validData);
						});
					}
					cy.then(() => {
						assertion(link, submit);
					}).then(() => {
						refreshForm();
					});
				});
			});
		});
	}
}
