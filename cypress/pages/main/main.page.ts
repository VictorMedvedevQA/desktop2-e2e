
import { IControl } from '../../shared/fields/filter-fields/filter-fields.object'

export class MainPage {
    public filter = {
        bodyType: '[formcontrolname ="bodyType"]',
        city: '[formcontrolname ="city"]',
        engineType: '[formcontrolname ="engineType"]',
        gearbox: '[formcontrolname ="gearbox"]',
        make: '[formcontrolname="make"]',
        model: '[formcontrolname="model"]',
        priceFrom: '[formcontrolname ="priceFrom"]',
        priceTo: '[formcontrolname ="priceTo"]',
        showAll: 'amc-row-col:contains(Все параметры)',
        yearFrom: '[formcontrolname ="yearFrom"]',
        yearTo: '[formcontrolname ="yearTo"]',
    }
    public reviewGalleryContainer: string = '.b-slider_review'
    public news = {
        content: '.b-blog',
        link: '.b-news__list-item:first',
    }
    public seoText = {
        container: '.b-information__content',
        link: '.b-information__content [routerlink="/cars"]',
        showMore: '.b-information__content .b-link.ng-star-inserted',
    }
    public controls = {
        active: '.am-tag-control_active',
        question: 'am-tags-control [name="question"]',
        tags: 'am-tags-control',
    }
    public pagination = {
        container: 'amc-section',
        results: '.am-cars-results__auctions',
    }
    public utpsText: string = 'am-utp amc-text:last'
    public carItems = {
        auctionItems: ' auction-item',
        creditPrice: '.b-card-price__description_credit',
        info: '.b-card__info',
    }
    public checkingIconsControl(control: IControl) {
        cy.get(this.controls.tags).contains(control.name).click()
            .wait('@getSearchTag')
            .get(this.controls.active).should('be.visible')
            .get(this.carItems.auctionItems).each((item) => {
                cy.wrap(item).find(control.iconSelector).should('be.visible')
            })
    }
    public checkingUrl(control: IControl): void {
        cy.get(this.controls.tags)
            .contains(control.name)
            .click().get(this.controls.active)
            .should('be.visible')
            .url().should('include', control.tags)
    }
}
