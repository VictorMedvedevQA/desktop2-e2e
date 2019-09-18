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
      it('Форма закрывается по крестику', () => {
        cy.then(() => {
          refreshForm()
          formTestingObject.closingPopupForm(link, openFormButton)
        })
      })
    })

    describe('Тест формы в попапе', () => {
      beforeEach(() => {
        cy.then(() => {
          refreshForm()
        })
      })
      this.isFormWorking(link, submit, refreshForm)
    })
  }
}
