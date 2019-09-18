/* tslint:disable */
export interface IForm {
	type: 'select' | 'input' | 'chekbox' | 'textarea';
	name: string;
}
export interface IFormData {
	name: string;
	data: string;
}

export const formFields: IForm[] = [
	{ type: 'chekbox', name: 'chekbox' },
	{ type: 'input', name: 'name' },
	{ type: 'input', name: 'phone' },
	{ type: 'input', name: 'agreement' },
	{ type: 'input', name: 'check' },
	{ type: 'input', name: 'email' },
	{ type: 'input', name: 'password' },
	{ type: 'input', name: 'username' },
	{ type: 'input', name: 'confirm' },
	{ type: 'input', name: 'phoneNumber' },
	{ type: 'input', name: 'code' },
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
				for (let el in formFields) {
					if (formFields[el].name === a) {
						fieldList.push(formFields[el]);
					}
				}
			});
		return fieldList;
	}

	fillElements(link: string, fieldsList: IForm[], data: IFormData[]) {
		cy.get(link).then(() => {
			for (let field in fieldsList) {
				let fieldName: string = fieldsList[field].name;
				this.fillElement(link, fieldName, data);
			}
		});
	}

	fillElement(link: string, fieldName: string, data: IFormData[]) {
		for (let eldata in data) {
			if (fieldName !== data[eldata].name) {
				continue;
			}
			let inputData: string = data[eldata].data;
			cy.then(() => {
				if (data[eldata].name !== 'phoneNumber') {
					cy.get(link)
						.find('[formcontrolname="' + fieldName + '"]')
						.find('input')
						.type(inputData);
				} else {
					cy.get(link)
						.find('[formcontrolname="' + fieldName + '"]')
						.type(inputData);
				}
			});
		}
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
			console.log(this.createFieldsList(link));
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

	closingPopupForm(link: string, openFormButton: string) {
		cy.get(link)
			.find(this.formButtons.closePopup)
			.click()
			.get(link)
			.should('be.not.visible');
	}

	submitWithoutRequiredFields(link: string, submit: string, refreshForm: any) {
		cy.then(() => {
			let allFieldsArray: IForm[] = this.createFieldsList(link);
			let requiredFieldsArray: IForm[] = allFieldsArray;
			cy.then(() => {
				requiredFieldsArray.forEach(elReq => {
					for (let elAllFields in allFieldsArray) {
						if (elReq.name === allFieldsArray[elAllFields].name) {
							continue;
						}
						cy.then(() => {
							this.fillElement(link, allFieldsArray[elAllFields].name, validData);
						});
					}
					cy.then(() => {
						cy.get(link)
							.find(submit)
							.should('be.disabled');
					}).then(() => {
						cy.then(() => {
							refreshForm();
						});
					});
				});
			});
		});
	}
}
