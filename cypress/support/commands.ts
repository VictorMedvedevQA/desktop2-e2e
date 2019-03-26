
/* tslint:disable */
Cypress.Commands.add('selectDropdown', { prevSubject: true }, (subject: any, text: any) => {
  cy.wrap(subject).click().then(() => {
    cy.get('amm-select-popup aml-select aml-select-item')
      .contains(text).click()
      .get('amm-select-popup aml-select aml-select-item').should('not.be.visible')
      .then(() => {
        return subject;
      });
  });
});

Cypress.Commands.add('toggle', { prevSubject: true }, (subject: any) => {
  cy.wrap(subject).click().then(() => {
    return subject;
  });
});
Cypress.Commands.add('visitGeo', (url: string, options?: any) => {
  cy.server()
  cy.route('https://m.test.automama.ru/api/v2/delivery/RegionCode?regionName*').as('getGeolocation');
  let geoPopup: string = 'amm-geo-location-popup aml-button';
  cy.visit(url, options)
  cy.wait('@getGeolocation')
    .get(geoPopup)
    .contains('Да')
    .click()
    .get(geoPopup).should('not.be.visible')
});

Cypress.Commands.add('ignoreGeo', (url: string, options?: any) => {
  cy.visit(url, options).get('amm-geo-location-popup aml-button')
    .get('.dark-backdrop.cdk-overlay-backdrop-showing').click();
});

Cypress.Commands.add('blockIsOpenAfterClick', (link: string, content: string, options?: any) => {
  cy.get(link).click().then(() => {
    cy.get(content).should('be.visible')
  });
});

Cypress.Commands.add('tabs', (container: string, content: string) => {
  cy.get(container).find('.b-tabs aml-tab-nav-item').then((tabs) => {
    let before = cy.get(content).then(() => {
      cy.wrap(tabs).each((tab) => {
        cy.wrap(tab).click()
      }).then(() => {
        let after = cy.get(content).then(() => {
          expect(before).not.to.be.equal(after);
        });
      });
    });
  });
});

Cypress.Commands.add('inputDropdown', { prevSubject: true },
  (subject: any, textInput: string, textOutput: string) => {
    cy.wrap(subject).click().then(() => {
      cy.get('aml-row-col .b-input__content').type(textInput);
      cy.get('aml-row-col').contains(textOutput).click().then(() => {
        return subject;
      });
    });
  });



// на десктоп

Cypress.Commands.add('isTooltipsOpenAfterMousmoove', (headers: string, options?: any) => {
  cy.get(headers).each((el) => {
    cy.wrap(el).trigger('mouseenter').then(() => {
      cy.get('.b-tooltip__description').should('be.visible')
    });
  })
});

declare namespace Cypress {
  interface Chainable {
    tabs: (container: string, content: string, ) => Chainable<any>;
    blockIsOpenAfterClick: (headers: string, content: string, options?: any) => Chainable<any>;
    input: (textInput: string) => Chainable<any>;
    inputDropdown: (textInput: string, textOutput: string) => Chainable<any>;
    selectDropdown: (text: any) => Chainable<any>;
    toggle: () => Chainable<any>;
    visitGeo: (url: string, options?: any) => Chainable<any>;
    ignoreGeo: (url: string, options?: any) => Chainable<any>;
    // на десктоп
    isTooltipsOpenAfterMousmoove: (headers: string, options?: any) => Chainable<any>;
  }
}

