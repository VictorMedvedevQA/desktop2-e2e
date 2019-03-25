import { PaginationObject } from './pagination.object'
const paginationObject = new PaginationObject()
export class PaginationSpec {
    public isPaginationWorking(paginationContainer: string, resultContainer: string, resultItem: string) {
        describe('Пагинация', () => {
            beforeEach(() => {
                cy.server()
                    .route('https://test.automama.ru/api/v2/auctions/search?offset=*').as('getSearchoffset')
            })
            it('изменился первый элемет в блоке', () => {
                cy.get(resultContainer).find(resultItem).first().then((el) => {
                    const firstBefore = el
                    paginationObject.switchPageByArrow(paginationContainer, 'next', 1)
                    cy.wait('@getSearchoffset')
                        .get(resultContainer).find(resultItem).first().then((el2) => {
                            const firstAfter = el2
                            cy.then(() => {
                                expect(firstBefore).not.to.be.equal(firstAfter)

                            })
                        })
                })
            })
            it('изменился урл', () => {
                cy.url().then((el) => {
                    const urlBefore = el
                    paginationObject.switchPageByArrow(paginationContainer, 'next', 1)

                    cy.wait('@getSearchoffset')
                        .url().then((el2) => {
                            const urlAfter = el2
                            cy.then(() => {
                                expect(urlBefore).not.to.be.equal(urlAfter)
                            })
                        })
                })
            })
            it('страница помечается как выбранная ', () => {
                cy.then(() => {
                    const activeBefore = paginationObject.findNumberActive(paginationContainer)
                    return (activeBefore)
                }).then((activeBefore) => {
                    paginationObject.switchPageByArrow(paginationContainer, 'next', 1)
                    cy.wait('@getSearchoffset')
                        .then(() => {
                            const activeAfter = paginationObject.findNumberActive(paginationContainer)
                            return (activeAfter)
                        }).then((activeAfter) => {
                            expect(activeBefore).not.to.be.equal(activeAfter)
                        })
                })
            })
        })
    }
}
