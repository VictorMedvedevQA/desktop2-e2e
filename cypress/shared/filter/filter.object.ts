// tslint:disable
import { urls } from "../../support/urls";
import { IField } from "./filter-fields.object";

export class FilterObject {
  public filter = {
    cleanAll: "amc-row-col:contains(Сбросить)",
    showAll: "amc-row-col:contains(Все параметры)"
  };
  public carItem = {
    auctionItemsResult: ".am-cars-results__auctions auction-item",
    auctionitem: "auction-item",
    itemCard: ".b-card"
  };
  public itemDescription = {
    city: ".b-card-description__city",
    info: ".b-card__info",
    title: ".b-card-description__title",
    year: ".b-card-description__year"
  };
  public controls = {
    active: ".am-tag-control_active",
    question: 'am-tags-control [name="question"]',
    tags: "am-tags-control"
  };
  public checkingIconsControl(control: IField) {
    cy.get(this.controls.active)
      .should("be.visible")
      .get(this.carItem.auctionItemsResult)
      .each(item => {
        if (control.iconSelector !== undefined) {
          cy.wrap(item)
            .find(control.iconSelector)
            .should("be.visible");
        }
      });
  }

  public getSearch() {
    cy.url().then(url => {
      switch (url) {
        case urls.express.main:
          {
            cy.server()
              .route("https://test.automama.ru/api/v2/dealer/auctions/search?*")
              .as("getSearch");
          }
          break;
        case urls.mainPage.main:
          {
            cy.server()
              .route("https://test.automama.ru/api/v2/auctions/search?*")
              .as("getSearch");
          }
          break;
      }
    });
  }

  public activateField(field: IField) {
    cy.url()
      .then(url => {
        if (url !== urls.express.main) {
          cy.get(this.filter.showAll).click();
        }
      })
      .then(() => {
        if (field.fieldType === "control") {
          cy.get(this.controls.tags)
            .contains(field.name)
            .click();
        } else if (field.fieldType === "dropdown") {
          if (
            field.formcontrolname !== undefined &&
            field.inputData !== undefined
          ) {
            cy.get(field.formcontrolname).selectDropdown(field.inputData);
          }
        } else if (field.fieldType === "input") {
          if (
            field.formcontrolname !== undefined &&
            field.inputData !== undefined
          ) {
            cy.get(field.formcontrolname)
              .type(field.inputData)
              .blur();
          }
        } else if (
          field.fieldType === "inputDropdown" &&
          field.name !== "Все модели"
        ) {
          if (
            field.formcontrolname !== undefined &&
            field.inputData !== undefined &&
            field.outputData !== undefined
          ) {
            cy.get(field.formcontrolname).inputDropdown(
              field.inputData,
              field.outputData
            );
          }
        } else if (field.name === "Все модели") {
          cy.get('[formcontrolname="make"]')
            .inputDropdown("Au", "Audi")
            .wait("@getSearch")
            .then(() => {
              if (
                field.formcontrolname !== undefined &&
                field.inputData !== undefined &&
                field.outputData !== undefined
              ) {
                cy.get(field.formcontrolname).inputDropdown(
                  field.inputData,
                  field.outputData
                );
              }
            });
        }
      })
      .wait("@getSearch");
  }
  public checkItem(param: string, value: string) {
    cy.get(this.carItem.auctionItemsResult).each(car => {
      cy.wrap(car)
        .find(this.itemDescription.title)
        .should("contain", value);
    });
  }
}
