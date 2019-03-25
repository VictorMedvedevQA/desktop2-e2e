// tslint:disable:max-classes-per-file
export interface IField {
    name: string
    fieldType: 'input' | 'select' | 'inputDropdown' | 'control',
    inputDataType: 'boolean' | 'string' | 'number',
    requires: boolean,
}

export const validData = [
    { name: 'name', data: 'Вася' },
    { name: 'phone', data: '0000000000' },
    { name: 'email', data: 'vasili@test.ru' },
]

export class FieldsObject {

}

// export class InputFields extends FieldsObject {

// }
// export class DropdownFields extends FieldsObject {
//     public selectDropdown() {

//     }
// }
// export class CheckboxFields extends FieldsObject {

// }
