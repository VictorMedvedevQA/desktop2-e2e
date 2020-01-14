import { ExpressFieldsSpec } from './express-filter-fields.spec';
import { IExpressFilterField } from './express-filter-fields';
const filterFieldsSpec = new ExpressFieldsSpec();

export class ExpressFilterSpec {
	public isExpressFilterWorking(fields: IExpressFilterField[]) {
		fields.forEach(field => {
			filterFieldsSpec.checkExpressField(field);
		});
	}
}
