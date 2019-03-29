import { PaginationObject } from '../pagination/pagination.object'
const paginationObject = new PaginationObject()

export interface IField {
    breadcrumbsChange: boolean,
    fieldType: 'input' | 'dropdown' | 'inputDropdown' | 'control',
    formcontrolname?: string,
    hide: boolean,
    iconSelector?: string,
    inputData?: string,
    name: string,
    seoTextChange: boolean,
    tags: string,
}

export class FilterObject {
    public filter = {
        cleanAll: 'amc-row-col:contains(Сбросить)',
        // make: '[formcontrolname="make"]',
        // model: '[formcontrolname="model"]',
        showAll: 'amc-row-col:contains(Все параметры)',
    }
    public carItem = {
        auctionItemsResult: '.am-cars-results__auctions auction-item',
        auctionitem: 'auction-item',
    }
    public itemDescription = {
        city: '.b-card-description__city',
        title: '.b-card-description__title',
        year: '.b-card-description__year',
    }
    public controls = {
        active: '.am-tag-control_active',
        question: 'am-tags-control [name="question"]',
        tags: 'am-tags-control',
    }
    public filterFields: IField[] = [
        // {
        //     breadcrumbsChange: false,
        //     fieldType: 'control',
        //     hide: false,
        //     iconSelector: '.b-card-features__icon_offer-week',
        //     name: 'Предложение недели',
        //     seoTextChange: false,
        //     tags: 'tags=27',
        // },
        // {
        //     breadcrumbsChange: false,
        //     fieldType: 'control',
        //     hide: false,
        //     iconSelector: '.b-card-features__icon_best-price',
        //     name: 'Лучшая цена на рынке',
        //     seoTextChange: false,
        //     tags: 'tags=2',
        // },
        // {
        //     breadcrumbsChange: false,
        //     fieldType: 'control',
        //     hide: false,
        //     iconSelector: '.b-card-features__icon_best-state',
        //     name: 'Идеальное состояние',
        //     seoTextChange: false,
        //     tags: 'tags=1',
        // },
        // {
        //     breadcrumbsChange: true,
        //     fieldType: 'dropdown',
        //     formcontrolname: '[formcontrolname ="engineType"]',
        //     hide: true,
        //     inputData: 'Бензиновый',
        //     name: 'Двигатель',
        //     seoTextChange: true,
        //     tags: 'gasoline',
        // },
        // {
        //     breadcrumbsChange: true,
        //     fieldType: 'dropdown',
        //     formcontrolname: '[formcontrolname ="city"]',
        //     hide: false,
        //     inputData: 'Краснодар',
        //     name: 'Город',
        //     seoTextChange: true,
        //     tags: 'krasnodar',
        // },
        // {
        //     breadcrumbsChange: true,
        //     fieldType: 'dropdown',
        //     formcontrolname: '[formcontrolname ="gearbox"]',
        //     hide: true,
        //     inputData: 'Автомат',
        //     name: 'КПП',
        //     seoTextChange: true,
        //     tags: 'gearbox=2',
        // },
        // {
        //     breadcrumbsChange: true,
        //     fieldType: 'dropdown',
        //     formcontrolname: '[formcontrolname ="bodyType"]',
        //     hide: true,
        //     inputData: 'Седан',
        //     name: 'Кузов',
        //     seoTextChange: true,
        //     tags: 'sedan',
        // },
        // {
        //     breadcrumbsChange: false,
        //     fieldType: 'input',
        //     formcontrolname: '[formcontrolname ="priceFrom"]',
        //     hide: false,
        //     inputData: '40000',
        //     name: 'Цена от',
        //     seoTextChange: false,
        //     tags: 'priceFrom=40000',
        // },
        // {
        //     breadcrumbsChange: true,
        //     fieldType: 'dropdown',
        //     formcontrolname: '[formcontrolname ="yearFrom"]',
        //     hide: true,
        //     inputData: '2012',
        //     name: 'Год от',
        //     seoTextChange: false,
        //     tags: 'yearFrom=2012',
        // },
        // {
        //     breadcrumbsChange: false,
        //     fieldType: 'dropdown',
        //     formcontrolname: '[formcontrolname ="yearTo"]',
        //     hide: true,
        //     inputData: '2017',
        //     name: 'до',
        //     seoTextChange: false,
        //     tags: 'yearTo=2017',
        // },
        // {
        //     breadcrumbsChange: true,
        //     fieldType: 'inputDropdown',
        //     formcontrolname: '[formcontrolname="make"]',
        //     hide: false,
        //     inputData: 'Audi',
        //     name: 'Все марки',
        //     seoTextChange: true,
        //     tags: 'audi',
        // },
        // {
        //     breadcrumbsChange: true,
        //     fieldType: 'inputDropdown',
        //     formcontrolname: '[formcontrolname="model"]',
        //     hide: false,
        //     inputData: 'A1',
        //     name: 'Все модели',
        //     seoTextChange: true,
        //     tags: 'a1',
        // },
    ]

    public checkingIconsControl(control: IField) {
        cy.get(this.controls.active).should('be.visible')
            .get(this.carItem.auctionItemsResult).each((item) => {
                if (control.iconSelector !== undefined) {
                    cy.wrap(item).find(control.iconSelector).should('be.visible')
                }
            })
    }
    public activateField(field: IField) {
        cy.get(this.filter.showAll).click().then(() => {
            if (field.fieldType === 'control') {
                cy.get(this.controls.tags)
                    .contains(field.name)
                    .click()
            } else if (field.fieldType === 'dropdown') {
                if (field.formcontrolname !== undefined && field.inputData !== undefined) {
                    cy.get(field.formcontrolname).selectDropdown(field.inputData)
                }
            } else if (field.fieldType === 'input') {
                if (field.formcontrolname !== undefined && field.inputData !== undefined) {
                    cy.get(field.formcontrolname).type(field.inputData).blur()
                }
            } else if (field.fieldType === 'inputDropdown') {
                // if (field.formcontrolname  ==='[formcontrolname="model"]') {
                //      this.activateField(this.filterFields.)
                // }
                if (field.formcontrolname !== undefined && field.inputData !== undefined) {
                    cy.get(field.formcontrolname)
                        .find('.amc-select').click().find('input')
                        .type(field.inputData).selectDropdown(field.inputData)
                }
            }
        }).wait('@getSearch')
    }
    public checkItem(param: string, value: string) {
        cy.get(this.carItem.auctionItemsResult).each((car) => {
            switch (param) {
                case 'make' || 'model': {
                    cy.wrap(car).find(this.itemDescription.title).should('contain', value)
                    break
                }
            }
        })
    }
}
