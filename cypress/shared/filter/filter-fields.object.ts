export enum filterFieldType {
	input = 'input',
	dropdown = 'dropdown',
	inputDropdown = 'inputDropdown',
	control = 'control',
	inputAutocomplete = 'inputAutocomplete',
}
export interface IFilterField {
	fieldType: filterFieldType;
	formcontrolname?: string;
	inputData?: string;
	outputData?: string;
	name: string;
	tags?: string;
}
