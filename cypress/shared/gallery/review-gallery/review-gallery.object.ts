declare type scrollDirection = 'left' | 'right'

export class ReviewGalleryObject {
    public galleryItems = {
        detailCarLink: '.b-card-review__subtitle',
        dotNav: '.b-dotnav',
        items: 'b-slider__item',
        left: '.b-slider-controlls__item_prev',
        moreLink: '.b-slider__item .b-link',
        reviewCardButton: '.b-slider__item .b-button',
        reviewCardPopup: 'am-review-card-popup',
        right: '.b-slider-controlls__item_next',
        sliderItems: '.b-slider__item',
    }

    public scrollGalleryByArrow(container: string, direction: string, itaration: number): void {
        for (let i = 0; i < itaration; i++) {
            if (direction === 'right') {
                cy.get(this.galleryItems.right).click()
            } else if (direction === 'left') {
                cy.get(this.galleryItems.left).click()
            }
        }
    }
    // public scrollGalleryByDot(container: string, dotNumber: number): void {

    // }
}
