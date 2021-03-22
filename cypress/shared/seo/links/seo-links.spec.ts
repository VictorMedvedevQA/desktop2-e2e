import { urls } from '../../../support/urls';
import { BreadcrumbsObject } from '../../breadcrumbs/breadcrumbs.object';
import { CarFilterObject } from '../../filter/cars-filter/car-filter.object';
import { SeoLinksObject } from './seo-links.object';

const breadcrumbsObject = new BreadcrumbsObject();
const filterObject = new CarFilterObject();
const seoLinksObject = new SeoLinksObject();
export class SeoLinksSpec {
	public isSeoLinksWorking() {
		describe('Работа нижнего блока', () => {
			it('На /cars отображаются только авто в наличии ', () => {
				cy.visitRoute(urls.catalog.main)
					.get(seoLinksObject.linksList)
					.find(seoLinksObject.linksItems)
					.contains('Hyundai')
					.should('be.visible')
					.get(seoLinksObject.linksItems)
					.contains('ЗАЗ')
					.should('not.exist');
			});

			seoLinksObject.seoLinks.forEach(el => {
				describe('При переходе на ' + el.name, () => {
					beforeEach(() => {
						if (el.name !== 'generation') {
							cy.visitRoute(el.urlToStart)
								.get(seoLinksObject.linksList)
								.find(seoLinksObject.linksItems)
								.contains(el.value)
								.click()
								.then(() => {
									// tslint:disable-next-line:switch-default
									switch (el.name) {
										case 'make':
											cy.wait('@getFilterMake');
											break;
										case 'model':
											cy.wait('@getFilterModel');
											break;
									}
								});
						} else {
							cy.visitRoute(el.urlToStart)
								.get(seoLinksObject.newLinksList)
								.find(seoLinksObject.newLinksItems)
								.contains(el.value)
								.click()
								.wait('@getFilterGeneration');
						}

					});

					if (el.name === 'make') {
						it('Изменились ссылки в нижнем блоке ', () => {
							cy.get(seoLinksObject.linksList)
								.find(seoLinksObject.linksItems)
								.contains(el.nextStageValue)
								.should('be.visible');
						});
					} else {
						it('Изменились ссылки в нижнем блоке Поколения', () => {
							cy.get(seoLinksObject.newLinksList)
								.eq(0)
								.find(seoLinksObject.newLinksItems)
								.each(el => {
									cy.wrap(el)
										.should('be.visible')
								})
						});

						it('Изменились ссылки в нижнем блоке Годы выпуска', () => {
							cy.get(seoLinksObject.newLinksList)
								.eq(1)
								.find(seoLinksObject.newLinksItems)
								.each(el => {
									const year = el.text();
									cy.wrap(el)
										.invoke('attr', 'href')
										.should('contain', `yearFrom=${year}&yearTo=${year}`)
								})
						});
					}

					it('Изменились хк ', () => {
						cy.get(breadcrumbsObject.container)
							.find(breadcrumbsObject.items.last)
							.contains(el.value)
							.should('be.visible');
					});

					it('Изменился урл ', () => {
						cy.url().should('contains', el.tags);
					});

					if (el.name !== 'generation') {
						it('Смена auctionItems', () => {
							filterObject.checkItem(el.value);
						});
					}
				});
			});
		});
	}
}
