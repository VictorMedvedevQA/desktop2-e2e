export interface IField {
    breadcrumbsChange: boolean,
    fieldType: 'input' | 'dropdown' | 'inputDropdown' | 'control',
    formcontrolname?: string,
    hide: boolean,
    iconSelector?: string,
    inputData?: string,
    outputData?: string,
    name: string,
    seoTextChange: boolean,
    tags: string,
}
export class FilterFieldsObject {
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
        {
            breadcrumbsChange: true,
            fieldType: 'inputDropdown',
            formcontrolname: '[formcontrolname="make"]',
            hide: false,
            inputData: 'Au',
            name: 'Все марки',
            outputData: 'Audi',
            seoTextChange: true,
            tags: 'audi',
        },
        {
            breadcrumbsChange: true,
            fieldType: 'inputDropdown',
            formcontrolname: '[formcontrolname="model"]',
            hide: false,
            inputData: 'A1',
            name: 'Все модели',
            seoTextChange: true,
            tags: 'a1',
        },
    ]
}
