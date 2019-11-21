export class Action {
	onlyDevDescribe = Cypress.env('production') ? describe.skip : describe;
	onlyDevIt = Cypress.env('production') ? it.skip : it;
}
