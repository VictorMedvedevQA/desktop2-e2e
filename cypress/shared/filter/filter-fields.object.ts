export enum filterFieldType {
	input = 'input',
	dropdown = 'dropdown',
	inputDropdown = 'inputDropdown',
	control = 'control',
}
export interface IFilterField {
	breadcrumbsChange: boolean;
	fieldType: filterFieldType;
	formcontrolname?: string;
	hide: boolean;
	iconSelector?: string;
	inputData?: string;
	outputData?: string;
	name: string;
	seoTextChange: boolean;
	tags: string;
	activateClearButton: boolean;
}
