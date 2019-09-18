export class ExpressCatalogPage {
	public carItems = 'express-car-item';
	public itemDescription = '.b-card-description';
	public price = '.b-card-price';
	public getSearchОffset = 'https://test.automama.ru/api/v2/dealer/auctions/searchDealers?offset=*';

	public pagination = {
		container: 'amc-section',
		results: '.am-cars-results__auctions',
	};
	public carItem = {
		expressItem: 'express-car-item',
		expressItemsResult: 'express-results express-car-item',
		itemCard: '.b-card',
	};
}
