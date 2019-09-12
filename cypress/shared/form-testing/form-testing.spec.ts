import { FormTestingObject } from './form-testing.object'

const formTestingObject = new FormTestingObject()

export class FormTestingSpec {
  public isFormWorking(link: string, submit: string, refreshForm: any) {
    describe('Общий тест формы', () => {
      it('Проверяем отправку без обязательных полей', () => {
        formTestingObject.submitWithoutRequiredFields(
          link,
          submit,
          refreshForm,
        )
      })
    })
  }
  public isPopupFormWorking(
    link: string,
    submit: string,
    openFormButton: string,
    refreshForm: any,
  ) {
    describe('Попап', () => {
      it('форма закрывается по крестику', () => {
        cy.get(openFormButton).then(() => {
          formTestingObject.closingPopupForm(link, openFormButton)
        })
      })
    })
    describe('тест формы в попапе', () => {
      beforeEach(() => {
        cy.get(openFormButton)
          .click()
          .then(() => {
            cy.get(link)
          })
      })
      this.isFormWorking(link, submit, refreshForm)
    })
  }
}
