import { FilterFieldsObject } from './filter-fields.object'
import { FilterFieldsSpec } from './filter-fields.spec'
const filterFieldsObject = new FilterFieldsObject()
const filterFieldsSpec = new FilterFieldsSpec()

export class FilterSpec {
  public isFilterWorking() {
    filterFieldsObject.filterFields.forEach((field) => {
      filterFieldsSpec.checkField(field)
    })
  }
}
