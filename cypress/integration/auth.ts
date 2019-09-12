import { AuthPage } from '../pages/auth/auth.page'
import {
  FormTestingObject,
  validData,
} from '../shared/form-testing/form-testing.object'
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec'
import { urls } from '../support/urls'
const authPage = new AuthPage()
const formTestingSpec = new FormTestingSpec()
const formTestingObject = new FormTestingObject()

describe('авторизация', () => {
  beforeEach(() => {
    cy.visit(urls.express.main)
  })

  describe('Форма "Вход"', () => {
    formTestingSpec.isPopupFormWorking(
      authPage.loginForm.formLink,
      authPage.loginForm.submitFormButton,
      authPage.loginForm.openFormButton,
      authPage.refreshLoginForm.bind(authPage),
    )
  })

  it('Успешно залогинились', () => {
    cy.then(() => {
      authPage.refreshLoginForm()
      formTestingObject.sendValidData(
        authPage.loginForm.formLink,
        authPage.loginForm.submitFormButton,
      )
    })
      .get(authPage.linkContainer)
      .should('contain', 'rbarinov@gmail.com')
  })

  it('Переход из попапа входа в попап регистрации по ссылке ', () => {
    cy.then(() => {
      authPage.refreshLoginForm()
    })
      .get(authPage.footerPopupLink)
      .contains('Регистрация')
      .click()
      .get(authPage.signupForm.formLink)
      .should('be.visible')
  })
})

describe('Регистрация', () => {
  beforeEach(() => {
    cy.visit(urls.express.main)
  })

  describe('Форма "Регистрация"', () => {
    formTestingSpec.isPopupFormWorking(
      authPage.signupForm.formLink,
      authPage.signupForm.submitFormButton,
      authPage.signupForm.openFormButton,
      authPage.refreshSignupForm.bind(authPage),
    )
  })

  it('Успешно отправили данные для регистрации', () => {
    cy.then(() => {
      authPage.refreshSignupForm()
      formTestingObject.sendValidData(
        authPage.signupForm.formLink,
        authPage.signupForm.submitFormButton,
      )
    })
      .get(authPage.confirmNumberFrom.formLink)
      .should('contain', '70000000011')
  })

  it('Переход из попапа регистрации в попап входа по ссылке ', () => {
    cy.then(() => {
      authPage.refreshSignupForm()
    })
      .get(authPage.footerPopupLink)
      .contains('Вход')
      .click()
      .get(authPage.loginForm.formLink)
      .should('be.visible')
  })

  it('При возврате на "изменить номер" не сброшены заполненные данные', () => {
    cy.then(() => {
      authPage.refreshSignupForm()
      formTestingObject.sendValidData(
        authPage.signupForm.formLink,
        authPage.signupForm.submitFormButton,
      )
    })
      .get(authPage.confirmNumberFrom.formLink)
      .should('contain', '70000000011')
      .get(authPage.insidePopupLink)
      .contains('Изменить номер телефона')
      .click()
      .get(authPage.signupForm.formLink)
      .find(authPage.signupForm.submitFormButton)
      .should('be.enabled')
  })
})
