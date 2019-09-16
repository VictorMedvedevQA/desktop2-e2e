import { AuthPage } from '../pages/auth/auth.page'
import { ExpressCatalogPage } from '../pages/express-catalog/express-catalog.page'
import { ExpressAuctionFilterSpec } from '../shared/express-auction-filter/express-auction-filter-spec'
import { FormTestingObject } from '../shared/form-testing/form-testing.object'

import { urls } from '../support/urls'
const authPage = new AuthPage()
const formTestingObject = new FormTestingObject()
const expressAuctionFilterSpec = new ExpressAuctionFilterSpec()
const expressCatalogPage = new ExpressCatalogPage()

describe('Видимость к-ва ставок и текущей ставки ', () => {
  beforeEach(() => {
    cy.visit(urls.express.main)
  })

  it('Если не залогинены - не видим ставку и к-во ставок ', () => {
    cy.get(authPage.loginForm.openFormButton)
      .should('be.visible')
      .get(expressCatalogPage.price)
      .should('not.be.visible')
  })

  it('Если залогинены - видим ставку и к-во ставок ', () => {
    cy.get(authPage.loginForm.openFormButton)
      .click()
      .then(() => {
        formTestingObject.sendValidData(
          authPage.loginForm.formLink,
          authPage.loginForm.submitFormButton,
        )
      })
      .get(expressCatalogPage.price)
      .each((el) => {
        cy.wrap(el).should('be.visible')
      })
  })
})
// describe(`Фильтрация по `, () => {
//   beforeEach(() => {
//     cy.visit(urls.express.main)
//     cy.server()
//       .route('https://test.automama.ru/2/dealer/auctions/search?*')
//       .as('getDealersSearch')
//   })
//   expressAuctionFilterSpec.isExpressAuctionFilterWorking()
// })
