/* tslint:disable */
import { urls, SITE_URL_API_V2, SITE_URL } from './urls';

Cypress.Commands.add('visitRoute', (url: any) => {
	cy.then(() => {
		switch (url) {
			case urls.express.main:
				{
					cy.server()
						.route(`${SITE_URL_API_V2}dealer/auctions/search?*`)
						.as('getSearch')
						.route(`${SITE_URL}auth/profile/me`)
						.as('me')
						.route(`${SITE_URL_API_V2}dealer/auctions/searchDealers?offset=*`)
						.as('getSearchOffset')
						.route(`${SITE_URL_API_V2}dealer/filter/*`)
						.as('getFilterSearch');
				}
				break;
			case urls.mainPage.main:
			case urls.catalog:
			case urls.catalog.main:
			case urls.catalog.filterredAudi:
				{
					cy.server()
						.route(`${SITE_URL_API_V2}individual/*`)
						.as('getAuctionIndividual')
						.route(`${SITE_URL_API_V2}auctions/search?*`)
						.as('getSearch')
						.route(`${SITE_URL_API_V2}auctions/search?offset=*`)
						.as('getSearchOffset')
						.route(`${SITE_URL_API_V2}filter/*`)
						.as('getFilterSearch')
						.route(`${SITE_URL_API_V2}filter/models?makeId=**`)
						.as('getFilterMake')
						.route(`${SITE_URL_API_V2}filter/generations?modelId=**`)
						.as('getFilterModel')
						.route(`${SITE_URL_API_V2}auctions/search?p1=audi&p2=a1&generation=6187`)
						.as('getFilterGeneration');
				}
				break;
			case urls.catalog.filterredAudiA1:
				{
					cy.server()
						.route(`${SITE_URL_API_V2}auctions/search?*`)
						.as('getSearch')
						.route(`${SITE_URL_API_V2}auctions/search?offset=*`)
						.as('getSearchOffset')
						.route(`${SITE_URL_API_V2}filter/*`)
						.as('getFilterSearch')
						.route(`${SITE_URL_API_V2}filter/models?makeId=**`)
						.as('getFilterMake')
						.route(`${SITE_URL_API_V2}filter/generations?modelId=**`)
						.as('getFilterModel')
						.route(`${SITE_URL_API_V2}auctions/search?p1=audi&p2=a1&generation=6187`)
						.as('getFilterGeneration');
				}
				break;
		}
	}).visit(url, {
		onBeforeLoad: window => {
			window.localStorage.clear();
		},
	});
});

Cypress.Commands.add('selectDropdown', { prevSubject: true }, (subject: any, text: any) => {
	cy.wrap(subject)
		.find('.amc-select')
		.click()
		.find('.amc-select__dropdown-item ')
		.contains(text)
		.click()
		.then(() => {
			return subject;
		});
});
Cypress.Commands.add('amSelect', { prevSubject: true }, (subject: any, text: any) => {
	cy.wrap(subject)
		.find('.b-select')
		.click()
		.find('.b-select__dropdown-field')
		.contains(text)
		.click()
		.get(subject)
		.then(() => {
			return subject;
		});
});

Cypress.Commands.add(
	'inputAutocomplete',
	{ prevSubject: true },
	(subject: any, textInput: string, textOutput: string) => {
		cy.wrap(subject)
			.find('input')
			.scrollIntoView()
			.type(textInput)
			.parent()
			.find('.b-input__dropdown')
			.find('.b-input__dropdown-field')
			.contains(textOutput)
			.click()
			.then(() => {
				return subject;
			});
	}
);

Cypress.Commands.add('toggle', { prevSubject: true }, (subject: any) => {
	cy.wrap(subject)
		.click()
		.then(() => {
			return subject;
		});
});

Cypress.Commands.add('blockIsOpenAfterClick', (link: string, content: string, options?: any) => {
	cy.get(link)
		.click()
		.then(() => {
			cy.get(content).should('be.visible');
		});
});

Cypress.Commands.add('findFirstVisible', (container: string, item: string, options?: any) => {
	cy.get(container)
		.find(item + ':visible')
		.first()
		.then(firstVisibleEl => {
			return firstVisibleEl;
		});
});

Cypress.Commands.add('tabs', (container: string, content: string) => {
	cy.get(container)
		.find('.b-tabs aml-tab-nav-item')
		.then(tabs => {
			let before = cy.get(content).then(() => {
				cy.wrap(tabs)
					.each(tab => {
						cy.wrap(tab).click();
					})
					.then(() => {
						let after = cy.get(content).then(() => {
							expect(before).not.to.be.equal(after);
						});
					});
			});
		});
});

Cypress.Commands.add('inputDropdown', { prevSubject: true }, (subject: any, textInput: string, textOutput: string) => {
	cy.wrap(subject)
		.find('.amc-select')
		.click()
		.find('input')
		.type(textInput)
		.get('.amc-select__dropdown-item')
		.contains(textOutput)
		.click()
		.then(() => {
			return subject;
		});
});

Cypress.Commands.add('isTooltipsOpenAfterMousmove', (headers: string, options?: any) => {
	cy.get(headers)
		.trigger('mouseenter')
		.then(() => {
			cy.get('.b-tooltip__description').should('be.visible');
		});
});

declare global {
	namespace Cypress {
		interface Chainable {
			tabs: (container: string, content: string) => Chainable<any>;
			blockIsOpenAfterClick: (headers: string, content: string, options?: any) => Chainable<any>;
			input: (textInput: string) => Chainable<any>;
			inputDropdown: (textInput: string, textOutput: string) => Chainable<any>;
			inputAutocomplete: (textInput: string, textOutput: string) => Chainable<any>;
			selectDropdown: (text: any) => Chainable<any>;
			toggle: () => Chainable<any>;
			visitRoute: (url: any) => Chainable<any>;
			findFirstVisible: (container: string, item: string) => Chainable<any>;
			isTooltipsOpenAfterMousmove: (headers: string, options?: any) => Chainable<any>;
			amSelect: (text: any) => Chainable<any>;
		}
	}
}
