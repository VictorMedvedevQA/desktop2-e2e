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
			nextStageValue: 'Solaris',
			tags: 'hyundai',
			urlToStart: urls.catalog.main,
			value: 'Hyundai',
		},
		{
			name: 'model',
			nextStageValue: 'I',
			tags: 'solaris',
			urlToStart: urls.catalog.filterredHyundai,
			value: 'Solaris',
		},
		{
			name: 'generation',
			nextStageValue: 'I',
			tags: 'generation=886',
			urlToStart: urls.catalog.filterredHyundaiSolaris,
			value: 'I',
		},
	];
}
