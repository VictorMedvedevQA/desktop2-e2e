import { PaginationObject } from './pagination.object';
const paginationObject = new PaginationObject();
export class PaginationSpec {
	public isPaginationWorking(paginationContainer: string, resultItem: string) {
		describe('Пагинация', () => {
			it('изменился первый элемет в блоке', () => {
				cy.get(resultItem)
					.first()
					.then(firstBefore => {
						paginationObject.switchPageByArrow(paginationContainer, 'next', 1);
						cy.wait('@getSearchOffset')
							.get(resultItem)
							.first()
							.then(firstAfter => {
								cy.then(() => {
									expect(firstBefore).not.to.be.equal(firstAfter);
								});
							});
					});
			});
			it('изменился урл', () => {
				cy.url().then(urlBefore => {
					paginationObject.switchPageByArrow(paginationContainer, 'next', 1);
					cy.wait('@getSearchOffset')
						.url()
						.then(urlAfter => {
							cy.then(() => {
								expect(urlBefore).not.to.be.equal(urlAfter);
							});
						});
				});
			});
			it('страница помечается как выбранная ', () => {
				cy.then(() => {
					const activeBefore = paginationObject.findNumberActive(paginationContainer);
					return activeBefore;
				}).then(activeBefore => {
					paginationObject.switchPageByArrow(paginationContainer, 'next', 1);
					cy.wait('@getSearchOffset')
						.then(() => {
							const activeAfter = paginationObject.findNumberActive(paginationContainer);
							return activeAfter;
						})
						.then(activeAfter => {
							expect(activeBefore).not.to.be.equal(activeAfter);
						});
				});
			});
		});
	}
}
