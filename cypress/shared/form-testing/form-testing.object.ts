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
	{ type: formFieldType.chekbox, name: 'agreement' },
	{ type: formFieldType.chekbox, name: 'check' },
	{ type: formFieldType.input, name: 'email' },
	{ type: formFieldType.input, name: 'password' },
	{ type: formFieldType.input, name: 'username' },
	{ type: formFieldType.input, name: 'confirm' },
	{ type: formFieldType.input, name: 'phoneNumber' },
	{ type: formFieldType.input, name: 'code' },
	{ type: formFieldType.select, name: 'city' },
];

export const validData: IFormData[] = [
	{ name: 'name', data: 'Вася' },
	{ name: 'phone', data: '0000000000' },
	{ name: 'email', data: 'kds@automama.ru' },
	{ name: 'password', data: '1' },
	{ name: 'username', data: 'kds@automama.ru' },
	{ name: 'confirm', data: '1' },
	{ name: 'phoneNumber', data: '0000000011' },
	{ name: 'code', data: '0000' },
	{ name: 'city', data: 'Краснодар' },
];

export class FormTestingObject {
	formButtons = {
		successPopup: 'amm-success-popup',
		closePopup: '.b-popup-close',
		errorField: 'ng-invalid',
		inputInvalid: '.b-input_invalid',
		checked: 'aml-checkbox .b-checkbox__inner_checked',
		disabledSubmit: '.b-input_disable',
	};

	findDataByFieldName(fieldName: string, dataArrayForm: IFormData[]): string {
		let field = dataArrayForm.find(field => field.name === fieldName);
		if (field) {
			return field.data;
		} else {
			throw new Error(`Не найдены данные для ввода по  ${fieldName}`);
		}
	}

	createFieldsList(link: string) {
		let fieldList: IForm[] = [];
		cy.get(link)
			.find('[formcontrolname]')
			.each(field => {
				let el = formFields.find(formField => formField.name === field.attr('formcontrolname'));
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

	fillElement(link: string, fieldName: string, dataArrayForm: IFormData[]) {
		let formField = formFields.find(field => field.name === fieldName);
		cy.then(() => {
			cy.get(link)
				.find('[formcontrolname="' + fieldName + '"]')
				.then(field => {
					if (formField) {
						switch (formField.type) {
							case formFieldType.chekbox:
								break;
							case formFieldType.input:
								if (!field.is('input')) {
									cy.wrap(field)
										.parent()
										.find('input')
										.type(this.findDataByFieldName(fieldName, dataArrayForm));
								} else if (field.is('input')) {
									cy.wrap(field).type(this.findDataByFieldName(fieldName, dataArrayForm));
								}
								break;
							case formFieldType.select:
								cy.wrap(field).amSelect(this.findDataByFieldName(fieldName, dataArrayForm));
								break;
							default:
								throw new Error(`Не найдены дейстия для типа ${formField.type}`);
						}
					}
				});
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

	clearAllFiealds(link: string) {
		cy.then(() => {
			let fields: IForm[] = this.createFieldsList(link);
			cy.get(link).then(() => {
				for (let field in fields) {
					if (fields[field].name !== 'agreement') {
						this.clearField(link, fields[field].name);
					}
				}
			});
		});
	}

	clearField(link: string, fieldName: string) {
		cy.get(link)
			.find('[formcontrolname="' + fieldName + '"]')
			.then(field => {
				if (!field.is('input')) {
					cy.wrap(field)
						.parent()
						.find('input')
						.clear();
				} else if (field.is('input')) {
					cy.wrap(field).clear();
				}
			});
	}

	submitWithoutRequiredFields(link: string, refreshForm: any, assertion: any, submit: string) {
		cy.then(() => {
			let allFieldsArray: IForm[] = this.createFieldsList(link);
			cy.then(() => {
				allFieldsArray.forEach(elReq => {
					for (let elAllFields in allFieldsArray) {
						if (elReq.name === allFieldsArray[elAllFields].name) {
							if (allFieldsArray[elAllFields].type === formFieldType.chekbox) {
								cy.get(link)
									.find('[formcontrolname="' + allFieldsArray[elAllFields].name + '"]')
									.next()
									.click();
							} else {
								continue;
							}
						}
						cy.then(() => {
							this.fillElement(link, allFieldsArray[elAllFields].name, validData);
						});
					}
					cy.get(submit)
						.then(submitButton => {
							if (!submitButton.is(this.formButtons.disabledSubmit)) {
								this.submitForm(link, submit);
							}
						})
						.wait(1000) //ожидание для проверки появления sucsess-popup
						.then(() => {
							assertion();
						})
						.then(() => {
							refreshForm();
						});
				});
			});
		});
	}
}
