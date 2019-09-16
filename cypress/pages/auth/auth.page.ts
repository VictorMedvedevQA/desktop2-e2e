import { FormTestingObject } from '../../shared/form-testing/form-testing.object'
import { urls } from '../../support/urls'

const formTestingObject = new FormTestingObject()

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

  public forgotPasswordForm = {
    formLink: 'am-popup .b-popup:contains(Восстановление пароля )',
    openFormButton: `${this.footerPopupLink}:contains(Регистрация)`,
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

  public refreshСonfirmNumberFrom() {
    cy.visit(urls.express.main)
      .then(() => {
        this.refreshSignupForm()
        formTestingObject.sendValidData(
          this.signupForm.formLink,
          this.signupForm.submitFormButton,
        )
      })
      .get(this.confirmNumberFrom.formLink)
      .should('contain', '70000000011')
  }

  public refreshForgotPasswordForm() {
    cy.visit(urls.express.main)
      .then(() => {
        this.refreshLoginForm()
      })
      .get(this.loginForm.formLink)
      .get(this.footerPopupLink)
      .contains('Забыли пароль?')
      .click()
      .get(this.forgotPasswordForm.formLink)
      .should('be.visible')
  }
}
