import { urls } from '../../../support/urls';

export interface ISeoLink {
	name: string;
	nextStageValue: string;
	tags: string;
	urlToStart: string;
	value: string;
}

export class SeoLinksObject {
	public header: string = '.b-h2';
	public container: string = 'am-cars-seo-links';
	public linksItems: string = '.b-items-list__item';
	public linksList: string = '.b-items-list';
	public newLinksList: string = 'am-cars-seo-links-list';
	public newLinksItems: string = '.seo-links-link';
	public seoLinks: ISeoLink[] = [
		{
			name: 'make',
			nextStageValue: 'Q5',
			tags: 'audi',
			urlToStart: urls.catalog.main,
			value: 'Audi',
		},
		{
			name: 'model',
			nextStageValue: 'I (8R)',
			tags: 'q5',
			urlToStart: urls.catalog.filterredAudi,
			value: 'Q5',
		},
		{
			name: 'generation',
			nextStageValue: 'I (8X)',
			tags: 'generation=6187',
			urlToStart: urls.catalog.filterredAudiA1,
			value: 'I (8X)',
		},
	];
}
