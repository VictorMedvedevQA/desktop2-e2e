import { CatalogPage } from '../pages/catalog/catalog.page'
import { CarsTagsGallerySpec } from '../shared/gallery/cars-tags-gallery/cars-tags-gallery.spec'
import { GalleryObject } from '../shared/gallery/gallery.object'
import { GallerySpec } from '../shared/gallery/gallery.spec'
import { SeoLinksSpec } from '../shared/seo/links/seo-links.spec'
import { urls } from '../support/urls'

const carsTagsGallerySpec = new CarsTagsGallerySpec()
const catalogPage = new CatalogPage()
const galleryObject = new GalleryObject()
const gallerySpec = new GallerySpec()
const seoLinksSpec = new SeoLinksSpec()

describe(' галерея "похожие авто"', () => {
    beforeEach(() => {
        cy.server()
            .route(' https://server.comagic.ru/comagic/*').as('getComagic')
            .visit(urls.catalog.filterredAudi)
            .wait('@getComagic')
            .get('.comagic-widget').first()
    })
    it('если  отфильтровано и есть авто  => "похожие авто"', () => {
        cy.get(catalogPage.galleries.similarGalleryContainer).should('be.visible')
    })
    gallerySpec.isGalleryWorking(catalogPage.galleries.similarGalleryContainer)
    gallerySpec.checkingClickItemRedirect(
        catalogPage.galleries.similarGalleryContainer,
        catalogPage.galleries.urlCheckingClickItemCarsGallery)
})
describe('галерея "авто в наличии"', () => {
    beforeEach(() => {
        cy.server()
            .route(' https://server.comagic.ru/comagic/*').as('getComagic')
            .visit(urls.catalog.main)
            .wait('@getComagic')
            .get('.comagic-widget').first()
    })
    it('если не отфильтровано => "авто в наличии"', () => {
        cy.get(catalogPage.galleries.carsGalleryContainer).should('be.visible')
    })
    it('если  отфильтровано и нет авто  => "авто в наличии"', () => {
        cy.visit(urls.catalog.filterredNoCar)
            .get(catalogPage.galleries.carsGalleryContainer).should('be.visible')
    })
    gallerySpec.isGalleryWorking(catalogPage.galleries.carsGalleryContainer)
    gallerySpec.checkingClickItemRedirect(
        catalogPage.galleries.carsGalleryContainer,
        catalogPage.galleries.urlCheckingClickItemCarsGallery)
})

describe('галерея "подборки авто"', () => {
    describe('скролл', () => {
        beforeEach(() => {
            cy.server()
                .route(' https://server.comagic.ru/comagic/*').as('getComagic')
                .visit(urls.catalog.main)
                .wait('@getComagic')
                .get('.comagic-widget').first()
        })
        gallerySpec.isGalleryWorking(catalogPage.galleries.carsTagsGalleryContainer)
    })
    describe('применение тега', () => {
        carsTagsGallerySpec.isCarsTagsGalleryWorking(catalogPage.galleries.carsTagsGalleryContainer)
    })
})
seoLinksSpec.isSeoLinksWorking()

describe('проданные авто', () => {
    beforeEach(() => {
        cy.server()
            .route(' https://server.comagic.ru/comagic/*').as('getComagic')
            .visit(urls.catalog.filterredAudiA1)
            .wait('@getComagic')
            .get('.comagic-widget').first()
    })
    it('показать проданные авто', () => {
        cy.get(catalogPage.catalog.soldCars).should('not.be.visible')
            .get(catalogPage.catalog.showSoldCars).click()
        // tslint:disable-next-line:no-unused-expression
        expect(catalogPage.catalog.soldCars).to.exist
    })
    it('скрыть проданные авто', () => {
        cy.get(catalogPage.catalog.showSoldCars).click()
            .get(catalogPage.catalog.hideSoldCars).click()
        // tslint:disable-next-line:no-unused-expression
        expect(catalogPage.catalog.soldCars).not.visible
    })
})
