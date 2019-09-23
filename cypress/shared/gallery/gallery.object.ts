export interface IGallery {
	container: string;
	items: string;
	left: string;
	right: string;
}

export class GalleryObject {
	public commonGalleryItems = {
		dotNav: '.b-dotnav__dot',
	};

	public checkItemChangeByArrow(gallery: IGallery) {
		cy.get(gallery.container)
			.find(this.commonGalleryItems.dotNav)
			.each(dot => {
				if (!dot.hasClass('active')) {
					cy.findFirstVisible(gallery.container, gallery.items).then(item => {
						const firstItemBefore = item;
						cy.get(gallery.container)
							.find(gallery.right)
							.scrollIntoView()
							.click()
							.then(() => {
								const firstItemAfter = cy.findFirstVisible(gallery.container, gallery.items);
								expect(firstItemBefore).not.to.be.equal(firstItemAfter);
							});
					});
				}
			});
	}
	public checkItemChangeByDot(gallery: IGallery) {
		cy.get(gallery.container)
			.find(this.commonGalleryItems.dotNav)
			.each(dot => {
				if (!dot.hasClass('active')) {
					cy.findFirstVisible(gallery.container, gallery.items).then(item => {
						const firstItemBefore = item;
						cy.wrap(dot)
							.scrollIntoView()
							.click()
							.then(() => {
								const firstItemAfter = cy.findFirstVisible(gallery.container, gallery.items);
								expect(firstItemBefore).not.to.be.equal(firstItemAfter);
							});
					});
				}
			});
	}
}
