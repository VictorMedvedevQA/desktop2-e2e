import { filterFieldType, IFilterField } from '../filter-fields.object';
export interface ICarsFilterField extends IFilterField {
	breadcrumbsChange: boolean;
	isHidden: boolean;
	seoTextChange: boolean;
	iconSelector?: string;
	activateClearButton: boolean;
}
export const filterFields: ICarsFilterField[] = [
	{
		activateClearButton: true,
		breadcrumbsChange: false,
		fieldType: filterFieldType.control,
		isHidden: false,
		iconSelector: '.b-card-features__icon_offer-week',
		name: 'Предложение недели',
		seoTextChange: false,
		tags: 'tags=27',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: false,
		fieldType: filterFieldType.control,
		isHidden: false,
		iconSelector: '.b-card-features__icon_best-price',
		name: 'Лучшая цена на рынке',
		seoTextChange: false,
		tags: 'tags=2',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: false,
		fieldType: filterFieldType.control,
		isHidden: false,
		iconSelector: '.b-card-features__icon_best-state',
		name: 'Идеальное состояние',
		seoTextChange: false,
		tags: 'tags=1',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: true,
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname ="engineType"]',
		isHidden: true,
		inputData: 'Бензиновый',
		name: 'Двигатель',
		seoTextChange: true,
		tags: 'gasoline',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: true,
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname ="city"]',
		isHidden: false,
		inputData: 'Краснодар',
		name: 'Город',
		seoTextChange: true,
		tags: 'krasnodar',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: true,
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname ="gearboxes"]',
		isHidden: true,
		inputData: 'Автомат',
		name: 'КПП',
		seoTextChange: true,
		tags: 'gearbox=2',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: true,
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname ="bodyType"]',
		isHidden: true,
		inputData: 'Седан',
		name: 'Кузов',
		seoTextChange: true,
		tags: 'sedan',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: false,
		fieldType: filterFieldType.input,
		formcontrolname: '[formcontrolname ="priceFrom"]',
		isHidden: false,
		inputData: '40000',
		name: 'Цена от',
		seoTextChange: false,
		tags: 'priceFrom=40000',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: true,
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname ="yearFrom"]',
		isHidden: true,
		inputData: '2012',
		name: 'Год от',
		seoTextChange: false,
		tags: 'yearFrom=2012',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: false,
		fieldType: filterFieldType.dropdown,
		formcontrolname: '[formcontrolname ="yearTo"]',
		isHidden: true,
		inputData: '2017',
		name: 'до',
		seoTextChange: false,
		tags: 'yearTo=2017',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: true,
		fieldType: filterFieldType.inputDropdown,
		formcontrolname: '[formcontrolname="make"]',
		isHidden: false,
		inputData: 'Au',
		name: 'Все марки',
		outputData: 'Audi',
		seoTextChange: true,
		tags: 'audi',
	},
	{
		activateClearButton: true,
		breadcrumbsChange: true,
		fieldType: filterFieldType.inputDropdown,
		formcontrolname: '[formcontrolname="model"]',
		isHidden: false,
		inputData: '1',
		name: 'Все модели',
		outputData: 'A1',
		seoTextChange: true,
		tags: 'a1',
	},
];
