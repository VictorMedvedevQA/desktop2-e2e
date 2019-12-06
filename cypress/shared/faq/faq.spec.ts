import { FaqPage } from './faq.page';
const faqPage = new FaqPage();
export class FaqSpec {
	public isFaqWorking() {
		it('Открытие ЧАВО', () => {
			cy.get(faqPage.list)
				.children()
				.first()
				.nextAll()
				.each(item => {
					cy.wrap(item)
						.find(faqPage.answer)
						.should('not.be.visible')
						.wrap(item)
						.click()
						.find(faqPage.answer)
						.should('be.visible');
				});
		});
	}
}
