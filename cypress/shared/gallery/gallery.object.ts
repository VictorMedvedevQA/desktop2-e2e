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
		activePhoto: 'am-gallery-popup-preview-item .b-slider__item_active img'
	};

	public checkItemChangeByArrowWithoutDot(gallery: IGallery) {
		cy.get(gallery.container)
			.find(gallery.items)
			.each(item => {
				const itemPicture = item.attr('src')
				cy.get(gallery.container)
					.find(this.commonGalleryItems.activePhoto)
					.invoke('attr', 'src')
					.then(activeItemPicture => {
						expect(itemPicture).to.eq(activeItemPicture)
					})
				    .get(gallery.container)
					.find(gallery.right)
					.click()
			});
	}

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
