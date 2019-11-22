export class OnlyDev {
	static describe = Cypress.env('production') ? describe.skip : describe;
	static it = Cypress.env('production') ? it.skip : it;
}
