export interface IField {
    iconSelector: string
    name: string
    fieldType: 'input' | 'select' | 'inputDropdown' | 'control',
    inputDataType: 'boolean' | 'string' | 'number',
    requires: boolean,
    tags: string,
}
export class FilterObject {
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
    public carItem = {
        auctionItems: ' auction-item',
    }
    public controls = {
        active: '.am-tag-control_active',
        question: 'am-tags-control [name="question"]',
        tags: 'am-tags-control',
    }
    public controlItems: IField[] = [
        {
            fieldType: 'control',
            iconSelector: '.b-card-features__icon_offer-week',
            inputDataType: 'string',
            name: 'Предложение недели',
            requires: false,
            tags: 'tags=27',
        },
        // {
        //     fieldType: 'control',
        //     iconSelector: '.b-card-features__icon_best-price',
        //     inputDataType: 'string',
        //     name: 'Лучшая цена на рынке',
        //     requires: false,
        //     tags: 'tags=2',
        // },
        // {
        //     fieldType: 'control',
        //     iconSelector: '.b-card-features__icon_best-state',
        //     inputDataType: 'string',
        //     name: 'Идеальное состояние',
        //     requires: false,
        //     tags: 'tags=1',
        // },
    ]

    public checkingIconsControl(control: IField) {
        cy.get(control.tags).contains(control.name).click()
            .wait('@getSearchTag')
            .get(this.controls.active).should('be.visible')
            .get(this.carItem.auctionItems).each((item) => {
                cy.wrap(item).find(control.iconSelector).should('be.visible')
            })
    }
    public checkingUrl(control: IField): void {
        cy.get(this.controls.tags)
            .contains(control.name)
            .click().get(this.controls.active)
            .should('be.visible')
            .url().should('include', control.tags)
    }
}
