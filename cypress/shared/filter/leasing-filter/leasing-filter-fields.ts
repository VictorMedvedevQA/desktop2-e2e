import { IFilterField, filterFieldType } from '../filter-fields.object';

export interface ILeasingFilterField extends IFilterField {
	isUrlChange: boolean;
	isSearchResultCheckable: boolean;
}

export const filterFields: ILeasingFilterField[] = [
	{
		fieldType: filterFieldType.tab,
		inputData: 'Москва',
		name: 'Москва',
		outputData: 'Москва',
		tags: 'moscow',
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
];
