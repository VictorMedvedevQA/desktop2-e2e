import { IFilterField } from '../filter-fields.object';
import { CarsFieldsSpec } from './cars-filter-fields.spec';
import { ICarsFilterField } from './cars-filter-fields';
const filterFieldsSpec = new CarsFieldsSpec();

export class FilterSpec {
	public isFilterWorking(fields: ICarsFilterField[]) {
		fields.forEach(field => {
			filterFieldsSpec.checkCatalogField(field);
		});
	}
}
