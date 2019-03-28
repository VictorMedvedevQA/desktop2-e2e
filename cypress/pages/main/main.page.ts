export class MainPage {
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
    public pagination = {
        container: 'amc-section',
        results: '.am-cars-results__auctions',
    }
    public utpsText: string = 'am-utp amc-text:last'
    public carItems = {
        creditPrice: '.b-card-price__description_credit',
        info: '.b-card__info-txt',
    }
}
