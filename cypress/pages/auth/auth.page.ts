import { urls } from '../../support/urls'

export class AuthPage {
  public linkContainer = '.link_container'
  public insidePopupLink = ' a.amc-link'
  public footerPopupLink = `.b-popup-footer__link ${this.insidePopupLink}`
  public loginForm = {
    formLink: 'am-popup .b-popup',
    openFormButton: `${this.linkContainer}:contains(Вход)`,
    submitFormButton: '[type="submit"]',
  }
  public signupForm = {
    formLink: 'am-popup .b-popup',
    openFormButton: `${this.linkContainer}:contains(Регистрация)`,
    submitFormButton: '[type="submit"]',
  }
  public confirmNumberFrom = {
    formLink: 'am-popup .b-popup:contains(Регистрация)',
    openFormButton: `${this.linkContainer}:contains(Регистрация)`,
    submitFormButton: '[type="submit"]',
  }
  public refreshLoginForm() {
    cy.visit(urls.express.main)
      .get(this.loginForm.openFormButton)
      .click()
      .get(this.loginForm.formLink)
  }
  public refreshSignupForm() {
    cy.visit(urls.express.main)
      .get(this.signupForm.openFormButton)
      .click()
      .get(this.loginForm.formLink)
  }
}
