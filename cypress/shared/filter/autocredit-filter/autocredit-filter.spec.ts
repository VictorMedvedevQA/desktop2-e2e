import { AutocreditFieldsSpec } from './autocredit-filter-fields.spec';
import { IAutocreditFilterField } from './autocredit-filter-fields';
const autocreditFieldsSpec = new AutocreditFieldsSpec();
export class AutocreditFilterSpec {
	public isAutocreditFilterWorking(fields: IAutocreditFilterField[]) {
		fields.forEach(field => {
			autocreditFieldsSpec.checkAutocreditField(field);
		});
	}
}
