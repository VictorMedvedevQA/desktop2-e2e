import { urls } from '../../../support/urls';
import { BreadcrumbsObject } from '../../breadcrumbs/breadcrumbs.object';
import { FilterObject } from '../../filter/filter.object';
import { SeoLinksObject } from './seo-links.object';

const breadcrumbsObject = new BreadcrumbsObject();
const filterObject = new FilterObject();
const seoLinksObject = new SeoLinksObject();
export class SeoLinksSpec {
	public isSeoLinksWorking() {
		describe('Работа нижнего блока', () => {
			it('На /cars отображаются только авто в наличии ', () => {
				cy.visitRoute(urls.catalog.main)
					.get(seoLinksObject.linksList)
					.find(seoLinksObject.linksItems)
					.contains('Audi')
					.should('be.visible')
					.get(seoLinksObject.linksItems)
					.contains('ЗАЗ')
					.should('not.be.visible');
			});

			seoLinksObject.seoLinks.forEach(el => {
				describe('При переходе на ' + el.name, () => {
					beforeEach(() => {
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
									case 'generation':
										cy.wait('@getFilterGeneration');
								}
							});
					});

					it('Изменились ссылки в нижнем блоке ', () => {
						cy.get(seoLinksObject.linksList)
							.find(seoLinksObject.linksItems)
							.contains(el.nextStageValue)
							.should('be.visible');
					});

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
							filterObject.checkItem(el.name, el.value);
						});
					}
				});
			});
		});
	}
}
