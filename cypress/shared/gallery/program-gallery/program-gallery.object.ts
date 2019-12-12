import { IGallery } from '../gallery.object';
export interface IProgramDescription {
	showDescriptionButton: string;
	descriptionBlock: string;
}
export class ProgramGalleryObject {
	public programDescripition: IProgramDescription = {
		showDescriptionButton: '.b-automap-link',
		descriptionBlock: '.b-credit-description',
	};
	public porgramItem = '.b-credit-item';
}
