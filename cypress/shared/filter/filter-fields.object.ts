export enum filterFieldType {
	input = 'input',
	dropdown = 'dropdown',
	dropdownCheckbox = 'dropdownCheckbox',
	inputDropdown = 'inputDropdown',
	control = 'control',
	inputAutocomplete = 'inputAutocomplete',
	tab = 'tab',
}
export interface IFilterField {
	fieldType: filterFieldType;
	formcontrolname?: string;
	inputData?: string;
	outputData?: string;
	name: string;
	tags?: string;
}
