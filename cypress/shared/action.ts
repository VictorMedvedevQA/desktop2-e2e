export class Action {
	maybeDescribe = Cypress.env('production') ? describe.skip : describe;
	maybeIt = Cypress.env('production') ? it.skip : it;
}
