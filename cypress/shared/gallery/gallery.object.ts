export class GalleryObject {
    public galleryItems = {
        dotActive: '.b-dotnav__dot_active',
        dotNav: '.b-dotnav__dot',
        itemsVisible: '.b-slider__item:visible',
        left: '.b-slider__arrow.b-slider__arrow_prev',
        right: '.b-slider__arrow.b-slider__arrow_next',
        sliderItems: '.b-slider__item',
    }
    public checkItemChangeByArrow(galleryContainer: string) {
        cy.get(galleryContainer).find(this.galleryItems.dotNav).each((dot) => {
            if (!dot.hasClass('active')) {
                cy.get(galleryContainer).find(this.galleryItems.itemsVisible).first().then((item) => {
                    const firstItemBefore = item
                    cy.get(galleryContainer).find(this.galleryItems.right)
                        .scrollIntoView().click().then(() => {
                            const firstItemAfter = cy.get(galleryContainer).find(this.galleryItems.itemsVisible).first()
                            expect(firstItemBefore).not.to.be.equal(firstItemAfter)
                        })
                })
            }
        })
    }
    public checkItemChangeByDot(galleryContainer: string) {
        cy.get(galleryContainer).find(this.galleryItems.dotNav).each((dot) => {
            if (!dot.hasClass('active')) {
                cy.get(galleryContainer).find(this.galleryItems.itemsVisible).first().then((item) => {
                    const firstItemBefore = item
                    cy.wrap(dot).scrollIntoView().click().then(() => {
                        const firstItemAfter = cy.get(galleryContainer).find(this.galleryItems.itemsVisible).first()
                        expect(firstItemBefore).not.to.be.equal(firstItemAfter)
                    })
                })
            }
        })
    }
    public scrollToTheLastItem(galleryContainer: string) {
        cy.get(galleryContainer).find(this.galleryItems.dotNav).last().click()
    }
}
