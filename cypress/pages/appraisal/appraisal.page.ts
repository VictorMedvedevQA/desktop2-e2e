// tslint:disable

export interface IAppraisalParameter {
    name?: string,
    isHide: boolean,
    type: 'item' | 'input',
    data: string
}

export class AppraisalPage {
    public defaultData: IAppraisalParameter[] = [
        { name: 'make', isHide: true, type: 'item', data: 'Ford' },
        { name: 'model', isHide: true, type: 'item', data: 'Mondeo' },
        { name: 'year', isHide: false, type: 'item', data: '2014' },
        { name: 'generation', isHide: false, type: 'item', data: 'IV Рестайлинг' },
        { name: 'bodyType', isHide: false, type: 'item', data: 'Седан' },
        { isHide: false, type: 'item', data: 'Автомат' },
        { isHide: false, type: 'item', data: 'Бензиновый' },
        { isHide: false, type: 'item', data: 'Передний' },
        { isHide: false, type: 'input', data: '123' },
        { isHide: false, type: 'input', data: '123' },
        { isHide: false, type: 'item', data: 'Базовая' },
        { name: 'city', isHide: false, type: 'item', data: 'Краснодар' },
    ]
    public liquidity4th: IAppraisalParameter[] = [
        { name: 'make', isHide: true, type: 'item', data: 'Kia ' },
        { name: 'model', isHide: true, type: 'item', data: 'Rio' },
        { name: 'year', isHide: false, type: 'item', data: '2014' },
        { name: 'generation', isHide: false, type: 'item', data: 'III' },
        { name: 'bodyType', isHide: false, type: 'item', data: 'Седан' },
        { isHide: false, type: 'item', data: 'Автомат' },
        { isHide: false, type: 'item', data: 'Бензиновый' },
        { isHide: false, type: 'item', data: 'Передний' },
        { isHide: false, type: 'input', data: '123' },
        { isHide: false, type: 'input', data: '123' },
        { isHide: false, type: 'item', data: 'Базовая' },
        { name: 'city', isHide: false, type: 'item', data: 'Ростов' },
    ]
    public notRetailQuality: IAppraisalParameter[] = [
        { name: 'make', isHide: true, type: 'item', data: 'Mercedes-Benz' },
        { name: 'model', isHide: true, type: 'item', data: 'S-klasse' },
        { name: 'year', isHide: false, type: 'item', data: '2019' },
        { name: 'generation', isHide: false, type: 'item', data: 'VI (W222' },
        { name: 'bodyType', isHide: false, type: 'item', data: 'Седан' },
        { isHide: false, type: 'item', data: 'Автомат' },
        { isHide: false, type: 'item', data: 'Бензиновый' },
        { isHide: false, type: 'item', data: 'Передний' },
        { isHide: false, type: 'input', data: '123' },
        { isHide: false, type: 'input', data: '123' },
        { isHide: false, type: 'item', data: 'Базовая' },
        { name: 'city', isHide: false, type: 'item', data: 'Москва' },
    ]
    public failAppraisal: IAppraisalParameter[] = [
        { name: 'make', isHide: true, type: 'item', data: 'Buick' },
        { name: 'model', isHide: true, type: 'item', data: 'Rendezvous' },
        { name: 'year', isHide: false, type: 'item', data: '2004' },
        { name: 'generation', isHide: false, type: 'item', data: 'Rendez' },
        { name: 'bodyType', isHide: false, type: 'item', data: 'Внедорожник' },
        { isHide: false, type: 'item', data: 'Автомат' },
        { isHide: false, type: 'item', data: 'Бензиновый' },
        { isHide: false, type: 'item', data: 'Передний' },
        { isHide: false, type: 'input', data: '123' },
        { isHide: false, type: 'input', data: '123' },
        { isHide: false, type: 'item', data: 'Базовая' },
        { name: 'city', isHide: false, type: 'item', data: 'Краснодар' },
    ]
    public itemsList = {
        itemText: '.b-link-item__text',
        showAll: '.b-button:contains(Показать все)',
        inputValue: '[formcontrolname="value"]',
        submitButton: '[type="submit"]',
    }
    public appraisalResult = {
        shedule: {
            diagram: 'am-appraisal-diagram',
            appraisalReport: 'am-appraisal-report .b-button_h50',
            fastSelling: 'am-appraisal-sell-request am-button',
            popup: '.b-popup',
            thirtyDaysDot: 'am-graph-dot[period="30"]',
            sixtyDaysdot: 'am-graph-dot[period="60"]',
            thirtyTooltipPrice: '.b-estimate-graf__tooltip-title.b-h2',
            closePopup: '.b-popup-close.b-icon-close',
            benefits: 'am-appraisal-benefits',
        },
        fail: {
            result: 'am-appraisal-fail',
            searchOptions: 'am-tag',
            closeSearchOptions: 'am-tag .b-tag-brick__icon',
        }
    }

    public fillAppraisal(data: IAppraisalParameter[]) {
        for (let parameter in data) {
            cy.then(() => {
                if (data[parameter].isHide === true) {
                    cy.get(this.itemsList.showAll).click()
                }
            })
                .then(() => {
                    switch (data[parameter].type) {
                        case 'item': {
                            cy.get(this.itemsList.itemText).contains(data[parameter].data).click()
                        }
                            break;
                        case 'input': {
                            cy.get(this.itemsList.inputValue).type(data[parameter].data)
                                .get(this.itemsList.submitButton).click()
                        }
                            break;
                    }
                })
        }
    }

}
