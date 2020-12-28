export interface IProgramDescription {
	showDescriptionButton: string;
	descriptionBlock: string;
}
export class ProgramGalleryObject {
	public programDescripition: IProgramDescription = {
		showDescriptionButton: '.b-automap-link',
		descriptionBlock: '.b-credit-description__item',
	};
	public porgramItem = '.b-credit-item';
}
