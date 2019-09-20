export interface IFilterField {
	breadcrumbsChange: boolean;
	fieldType: 'input' | 'dropdown' | 'inputDropdown' | 'control';
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
