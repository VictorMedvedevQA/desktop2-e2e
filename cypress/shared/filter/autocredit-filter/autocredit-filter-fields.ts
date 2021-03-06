import { IFilterField, filterFieldType } from '../filter-fields.object';

export interface IAutocreditFilterField extends IFilterField {
	isUrlChange: boolean;
	isSearchResultCheckable: boolean;
	shoudBeDisable?: boolean;
	requestParam?: string;
}

export const filterFields: IAutocreditFilterField[] = [
	{
		fieldType: filterFieldType.inputAutocomplete,
		formcontrolname: '[formcontrolname="makeId"]',
		inputData: 'Hyundai',
		name: 'Марка',
		outputData: 'Hyundai',
		tags: 'hyundai',
		isUrlChange: true,
		isSearchResultCheckable: true,
	},
	{
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname="loanMonths"]',
		inputData: 'A',
		name: 'Срок кредита (лет)',
		isUrlChange: false,
		isSearchResultCheckable: false,
	},
	{
		fieldType: filterFieldType.inputAutocomplete,
		formcontrolname: '[formcontrolname="modelId"]',
		inputData: 'So',
		name: 'Модель',
		outputData: 'Solaris',
		tags: 'solaris',
		isUrlChange: true,
		isSearchResultCheckable: true,
	},
	{
		fieldType: filterFieldType.tab,
		inputData: 'Москва',
		name: 'Москва',
		outputData: 'Москва',
		tags: 'test.automama.ru/autocredit',
		isUrlChange: true,
		isSearchResultCheckable: true,
	},
	{
		fieldType: filterFieldType.tab,
		inputData: 'Краснодар',
		name: 'Краснодар',
		outputData: 'Краснодар',
		tags: 'krasnodar',
		isUrlChange: true,
		isSearchResultCheckable: true,
	},
	{
		fieldType: filterFieldType.tab,
		inputData: 'Ростов-на-Дону',
		name: 'Ростов-на-Дону',
		outputData: 'Ростов-на-Дону',
		tags: 'rostov-na-donu',
		isUrlChange: true,
		isSearchResultCheckable: true,
	},
	{
		formcontrolname: '[formcontrolname="kaskoRequired"]',
		fieldType: filterFieldType.dropdown,
		name: 'Страхование КАСКО',
		isUrlChange: false,
		isSearchResultCheckable: false,
		shoudBeDisable: true,
	},
	{
		formcontrolname: '[formcontrolname="lifeInsurance"]',
		fieldType: filterFieldType.dropdown,
		name: 'Страхование жизни',
		isUrlChange: false,
		isSearchResultCheckable: false,
		shoudBeDisable: true,
	},
];
