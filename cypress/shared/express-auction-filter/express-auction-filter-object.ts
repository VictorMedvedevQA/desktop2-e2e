import { IField } from '../filter/filter-fields.object'
export class ExpressAuctionFilter {
  public filterFields: IField[] = [
    {
      breadcrumbsChange: true,
      fieldType: 'dropdown',
      formcontrolname: '[formcontrolname ="regionId"]',
      hide: false,
      inputData: 'Краснодар',
      name: 'Город',
      seoTextChange: false,
      tags: 'krasnodar',
    },

    {
      breadcrumbsChange: true,
      fieldType: 'dropdown',
      formcontrolname: '[formcontrolname ="yearFrom"]',
      hide: true,
      inputData: '2012',
      name: 'Год от',
      seoTextChange: false,
      tags: 'yearFrom=2012',
    },
    {
      breadcrumbsChange: false,
      fieldType: 'dropdown',
      formcontrolname: '[formcontrolname ="yearTo"]',
      hide: true,
      inputData: '2017',
      name: 'до',
      seoTextChange: false,
      tags: 'yearTo=2017',
    },
    {
      breadcrumbsChange: true,
      fieldType: 'inputDropdown',
      formcontrolname: '[formcontrolname="make"]',
      hide: false,
      inputData: 'Au',
      name: 'Все марки',
      outputData: 'Audi',
      seoTextChange: false,
      tags: 'audi',
    },
    {
      breadcrumbsChange: true,
      fieldType: 'inputDropdown',
      formcontrolname: '[formcontrolname="model"]',
      hide: false,
      inputData: '1',
      name: 'Все модели',
      outputData: 'A1',
      seoTextChange: false,
      tags: 'a1',
    },
  ]
}
