import { GalleryObject } from './gallery.object'
const galleryObject = new GalleryObject()
export class GallerySpec {
    public isGalleryWorking(): void {
        describe('Тест галереи ', () => {
            it('скролл по стрелке', () => {
                galleryObject.checkItemChangeByArrow()
            })
            it('переключение по точкам', () => {
                galleryObject.checkItemChangeByDot()
            })
        })
    }
    public checkingClickItemRedirect(urlAfter: string) {
        it('переход по клику на galleryItem', () => {
            cy.get(galleryObject.galleryItems.itemsVisible).first().click()
                .url().should('contains', urlAfter)
        })
    }
}
