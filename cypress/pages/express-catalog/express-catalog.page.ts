export class ExpressCatalogPage {
	public carItems = 'express-car-item';
	public itemDescription = '.b-card-description';
	public price = '.b-card-price';
	public getProfy = 'input[value="Получить статус Профи"]';
	public successPopup = '.b-popup__container:has(h3:contains(Ваша заявка принята!))';
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
