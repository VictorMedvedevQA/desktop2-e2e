declare type scrollDirection = 'left' | 'right'
// tslint:disable
export class ReviewGalleryObject {

    public galleryItems = {

        detailCarLink: '.b-card-review__subtitle',
        detailCarLinkPopup: '.b-card-review-popup__subtitle',
        dotActive: 'b-dotnav__dot_active',
        dotNav: '.b-dotnav__dot',
        giveFeedbackButton: '.b-button_center',
        itemsVisible: '.b-slider__item:visible',
        left: '.b-slider-controlls__item_prev',
        moreLink: '.b-slider__item .b-link',
        reviewCardButton: '.b-slider__item .b-button',
        reviewCardPopup: '.b-card-review-popup',
        right: '.b-slider-controlls__item_next',
        singleSlideGallery: '.b-gallery-preview_auto',
        sliderItems: '.b-slider__item',
    }

    public scrollGalleryByArrow(container: string, direction: string, itaration: number): void {
        for (let i = 0; i < itaration; i++) {
            if (direction === 'right') {

            } else if (direction === 'left') {
                cy.get(this.galleryItems.left).click()
            }
        }
    }
    public checkItemChangeByArrow() {
        cy.get(this.galleryItems.dotNav).each((dot) => {
            if (!dot.hasClass('active')) {
                cy.get(this.galleryItems.itemsVisible).first().then((item) => {
                    const firstItemBefore = item
                    cy.get(this.galleryItems.right).click().then(() => {
                        const firstItemAfter = cy.get(this.galleryItems.itemsVisible).first()
                        expect(firstItemBefore).not.to.be.equal(firstItemAfter)
                    })
                })
            }
        })
    }
    public checkItemChangeByDot() {
        cy.get(this.galleryItems.dotNav).each((dot) => {
            if (!dot.hasClass('active')) {
                cy.get(this.galleryItems.itemsVisible).first().then((item) => {
                    const firstItemBefore = item
                    cy.wrap(dot).click().then(() => {
                        const firstItemAfter = cy.get(this.galleryItems.itemsVisible).first()
                        expect(firstItemBefore).not.to.be.equal(firstItemAfter)
                    })
                })
            }
        })
    }
}
