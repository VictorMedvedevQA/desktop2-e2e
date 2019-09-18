import { IField } from './filter-fields.object'
import { FilterFieldsSpec } from './filter-fields.spec'
const filterFieldsSpec = new FilterFieldsSpec()

export class FilterSpec {
  public isFilterWorking(fields: IField[]) {
    fields.forEach((field) => {
      filterFieldsSpec.checkField(field)
    })
  }
}
