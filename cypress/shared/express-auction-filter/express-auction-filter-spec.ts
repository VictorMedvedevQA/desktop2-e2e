import { FilterFieldsSpec } from '../filter/filter-fields.spec'
import { ExpressAuctionFilter } from './express-auction-filter-object'
const expressAuctionFilter = new ExpressAuctionFilter()
const filterFieldsSpec = new FilterFieldsSpec()

export class ExpressAuctionFilterSpec {
  public isExpressAuctionFilterWorking() {
    expressAuctionFilter.filterFields.forEach((field) => {
      filterFieldsSpec.checkField(field)
    })
  }
}
