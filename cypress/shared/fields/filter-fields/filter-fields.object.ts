
import { IField } from './../baseFields/fields.object'

export interface IFilterField extends IField {
    tags: string
    chooseAny: string | void
}
export interface IControl extends IFilterField {
    iconSelector: string
}
export interface IInputDropdown extends IFilterField {
    inputData: string
}

//  export class ControlField{

//  }
// export const controlItems: IControl[] = [
//     {
//         fieldType: 'control',
//         iconSelector: '.b-card-features__icon_offer-week',
//         inputDataType: 'string',
//         name: 'Предложение недели',
//         requires: false,
//         tags: 'tags=27',
//     },
//     {
//         fieldType: 'control',
//         iconSelector: '.b-card-features__icon_best-price',
//         inputDataType: 'string',
//         name: 'Лучшая цена на рынке',
//         requires: false,
//         tags: 'tags=2',
//     },
//     {
//         fieldType: 'control',
//         iconSelector: '.b-card-features__icon_best-state',
//         inputDataType: 'string',
//         name: 'Идеальное состояние',
//         requires: false,
//         tags: 'tags=1',
//     },
// ]
