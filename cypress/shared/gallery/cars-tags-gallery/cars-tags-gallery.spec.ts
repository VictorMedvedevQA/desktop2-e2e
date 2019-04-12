import { urls } from '../../../support/urls'
import { GalleryObject } from '..//gallery.object'
import { CarsTagsGalleryObject } from '../cars-tags-gallery/cars-tags-gallery.object'

const galleryObject = new GalleryObject()
const carsTagsGalleryObject = new CarsTagsGalleryObject()

export class CarsTagsGallerySpec {
    public isCarsTagsGalleryWorking(container: string): void {
        describe('Тест галереи подборок', () => {
            beforeEach(() => {
                cy.server()
                    .route(' https://server.comagic.ru/comagic/*').as('getComagic')
                    .visit(urls.catalog.main)
                    .wait('@getComagic')
                    .get('.comagic-widget').first()
                    .get(container).find(galleryObject.galleryItems.itemsVisible)
                    .contains(carsTagsGalleryObject.tag.name)
                    .find(carsTagsGalleryObject.tag.title)
                    .click()
            })
            it('появился тег', () => {
                cy.get(carsTagsGalleryObject.tag.selector)
                    .contains(carsTagsGalleryObject.tag.name).should('be.visible')

            })
            it('изменился урл', () => {
                cy.url().should('contains', carsTagsGalleryObject.tag.urlTag)
            })
        })
    }
}
