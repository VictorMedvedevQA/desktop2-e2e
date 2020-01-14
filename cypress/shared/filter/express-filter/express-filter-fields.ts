import { filterFieldType, IFilterField } from '../filter-fields.object';
export interface IExpressFilterField extends IFilterField {
	isSearchResultCheckable: boolean;
}
export const filterFields: IExpressFilterField[] = [
	{
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname ="regionId"]',
		inputData: 'Краснодар',
		name: 'Город',
		tags: 'regionId=23',
		isSearchResultCheckable: false,
	},
	{
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname ="yearFrom"]',
		inputData: '2012',
		name: 'Год от',
		tags: 'yearFrom=2012',
		isSearchResultCheckable: true,
		outputData: '2012',
	},
	{
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname ="yearTo"]',
		inputData: '2017',
		name: 'до',
		tags: 'yearTo=2017',
		isSearchResultCheckable: true,
		outputData: '2017',
	},
	{
		fieldType: filterFieldType.inputDropdown,
		formcontrolname: '[formcontrolname="make"]',
		inputData: 'Au',
		name: 'Все марки',
		outputData: 'Audi',
		tags: 'make=10',
		isSearchResultCheckable: true,
	},
	{
		fieldType: filterFieldType.inputDropdown,
		formcontrolname: '[formcontrolname="model"]',
		inputData: '1',
		name: 'Все модели',
		outputData: 'A1',
		tags: 'model=80',
		isSearchResultCheckable: true,
	},
];
