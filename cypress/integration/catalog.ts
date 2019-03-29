import { CatalogPage } from '../pages/catalog/catalog.page'
import { GalleryObject } from '../shared/gallery/gallery.object'
import { GallerySpec } from '../shared/gallery/gallery.spec'
import { SeoLinksSpec } from '../shared/seo/links/seo-links.spec'
import { urls } from '../support/urls'
const catalogPage = new CatalogPage()
const galleryObject = new GalleryObject()
const gallerySpec = new GallerySpec()
const seoLinksSpec = new SeoLinksSpec()
// describe(' галерея "похожие авто"', () => {
//     beforeEach(() => {
//         cy.visit(urls.catalog.filterredHasCar)
//     })
//     it('если  отфильтровано и есть авто  => "похожие авто"', () => {
//         cy.get(catalogPage.galleries.similarGalleryContainer).should('be.visible')
//     })
//     gallerySpec.isGalleryWorking()
//     gallerySpec.checkingClickItemRedirect(
//         catalogPage.galleries.urlCheckingClickItemCarsGallery)
// })
// describe('галерея "авто в наличии"', () => {
//     beforeEach(() => {
//         cy.visit(urls.catalog.main)
//     })
//     it('если не отфильтровано => "авто в наличии"', () => {
//         cy.get(catalogPage.galleries.carsGalleryContainer).should('be.visible')
//     })
//     it('если  отфильтровано и нет авто  => "авто в наличии"', () => {
//         cy.visit(urls.catalog.filterredNoCar)
//             .get(catalogPage.galleries.carsGalleryContainer).should('be.visible')
//     })
// gallerySpec.isGalleryWorking()
//     gallerySpec.checkingClickItemRedirect(
//         catalogPage.galleries.urlCheckingClickItemCarsGallery)
// })

seoLinksSpec.isSeoLinksWorking()
