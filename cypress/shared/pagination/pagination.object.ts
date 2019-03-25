
declare type switchDirection = 'prev' | 'next'
export class PaginationObject {
    public paginationItems = {
        activ: '.b-pagination__item_active',
        block: 'am-pagination',
        item: '.b-pagination__item.ng-star-inserted',
        next: '.b-pagination__item_next',
        prev: '.b-pagination__item_prev',

    }
    public switchPageByArrow(container: string, direction: string, itaration: number): void {
        for (let i = 0; i < itaration; i++) {
            if (direction === 'prev') {
                cy.get(this.paginationItems.prev).click()
            } else if (direction === 'next') {
                cy.get(this.paginationItems.next).click()
            }
        }
    }
    public goToLastPage() {
        cy.get(this.paginationItems.item).last().click()
    }
    public findNumberActive(container: string) {
        cy.get(container).find(this.paginationItems.activ).then((el) => {
            const activeNumber = el.text()
            return (activeNumber)

        })
    }
}
