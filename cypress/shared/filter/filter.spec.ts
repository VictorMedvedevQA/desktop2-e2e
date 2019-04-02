
import { BreadcrumbsObject } from '../breadcrumbs/breadcrumbs.object'
import { FilterFieldsObject, IField } from './filter-fields.object'
import { FilterFieldsSpec } from './filter-fields.spec'
import { FilterObject } from './filter.object'
const filterFieldsObject = new FilterFieldsObject()
const filterFieldsSpec = new FilterFieldsSpec()
const breadcrumbsObject = new BreadcrumbsObject()
const filterObject = new FilterObject()
export class FilterSpec {
    public isFilterWorking() {
        filterFieldsObject.filterFields.forEach((field) => {
            // filterFieldsSpec.checkField(field)
            filterFieldsSpec.checkSearchResult(field)
        })
    }
}
