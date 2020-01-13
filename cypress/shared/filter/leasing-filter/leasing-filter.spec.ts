import { LeasingFieldsSpec } from './leasing-filter-fields.spec';
import { ILeasingFilterField } from './leasing-filter-fields';
const leasingFieldsSpec = new LeasingFieldsSpec();
export class LeasingFilterSpec {
	public isLeasingFilterWorking(fields: ILeasingFilterField[]) {
		fields.forEach(field => {
			leasingFieldsSpec.checkLeasingField(field);
		});
	}
}
