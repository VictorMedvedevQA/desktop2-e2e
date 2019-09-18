import { GalleryObject } from './gallery.object'

const galleryObject = new GalleryObject()

export class GallerySpec {
  public isGalleryWorking(galleryContainer: string): void {
    describe('Тест галереи ', () => {
      beforeEach(() => {
        cy.get(galleryContainer)
          .find(galleryObject.galleryItems.itemsVisible)
          .first()
          .scrollIntoView()
      })

      it('Скролл по стрелке', () => {
        galleryObject.checkItemChangeByArrow(galleryContainer)
      })

      it('Переключение по точкам', () => {
        galleryObject.checkItemChangeByDot(galleryContainer)
      })
    })
  }

  public checkingClickItemRedirect(galleryContainer: string, urlAfter: string) {
    it('Переход по клику на galleryItem', () => {
      cy.get(galleryContainer)
        .find(galleryObject.galleryItems.itemsVisible)
        .first()
        .click()
        .url()
        .should('contains', urlAfter)
    })
  }
}
