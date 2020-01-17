import { SellingPage } from '../pages/selling/selling.page';
import { urls } from '../support/urls';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';
import { FaqSpec } from '../shared/faq/faq.spec';

const formTestingSpec = new FormTestingSpec();
const faqSpec = new FaqSpec();
const sellingPage = new SellingPage();

describe('Продажа авто', () => {
	beforeEach(() => {
		cy.visitRoute(urls.selling);
	});

	describe('Hero form', () => {
		formTestingSpec.isFormWorking(
			sellingPage.heroForm.formLink,
			sellingPage.heroForm.submitFormButton,
			sellingPage.refreshForm.bind(sellingPage),
			sellingPage.failAssertion.bind(sellingPage)
		);
	});

	describe('Inline form', () => {
		formTestingSpec.isFormWorking(
			sellingPage.inlineForm.formLink,
			sellingPage.inlineForm.submitFormButton,
			sellingPage.refreshForm.bind(sellingPage),
			sellingPage.failAssertion.bind(sellingPage)
		);
	});
	faqSpec.isFaqWorking();
});
