import { IFilterField, filterFieldType } from '../filter-fields.object';

export interface IAutocreditFilterField extends IFilterField {
	isUrlChange: boolean;
	isSearchResultCheckable: boolean;
}

export const filterFields: IAutocreditFilterField[] = [
	{
		fieldType: filterFieldType.inputAutocomplete,
		formcontrolname: '[formcontrolname="makeId"]',
		inputData: 'Au',
		name: 'Марка',
		outputData: 'Audi',
		tags: 'audi',
		isUrlChange: true,
		isSearchResultCheckable: true,
	},
	{
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname="loanMonths"]',
		inputData: '1',
		name: 'Срок кредита (лет)',
		isUrlChange: false,
		isSearchResultCheckable: false,
	},
	{
		fieldType: filterFieldType.inputAutocomplete,
		formcontrolname: '[formcontrolname="modelId"]',
		inputData: '1',
		name: 'Модель',
		outputData: 'A1',
		tags: 'a1',
		isUrlChange: true,
		isSearchResultCheckable: true,
	},
];
