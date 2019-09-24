export interface IGallery {
	container: string;
	items: string;
	left: string;
	right: string;
}

export class GalleryObject {
	public commonGalleryItems = {
		dotNav: '.b-dotnav__dot',
		activeDot: '.b-dotnav__dot_active',
	};

	public checkItemChangeByArrow(gallery: IGallery) {
		cy.get(gallery.container)
			.find(this.commonGalleryItems.activeDot)
			.nextAll()
			.each(() => {
				cy.findFirstVisible(gallery.container, gallery.items).then(firstItemBefore => {
					cy.get(gallery.container)
						.find(gallery.right)
						.scrollIntoView()
						.click()
						.then(() => {
							const firstItemAfter = cy.findFirstVisible(gallery.container, gallery.items);
							expect(firstItemBefore).not.to.be.equal(firstItemAfter);
						});
				});
			});
	}
	public checkItemChangeByDot(gallery: IGallery) {
		cy.get(gallery.container)
			.find(this.commonGalleryItems.activeDot)
			.nextAll()
			.each(dot => {
				cy.findFirstVisible(gallery.container, gallery.items).then(firstItemBefore => {
					cy.wrap(dot)
						.scrollIntoView()
						.click()
						.then(() => {
							const firstItemAfter = cy.findFirstVisible(gallery.container, gallery.items);
							expect(firstItemBefore).not.to.be.equal(firstItemAfter);
						});
				});
			});
	}
}
