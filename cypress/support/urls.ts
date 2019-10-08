export const SITE_URL_API_V2 = '/api/v2/';
export const SITE_URL = '';
export const PROD_URL = 'https://automama.ru';

export const urls = {
	appraisal: `${SITE_URL}ocenka-avto`,
	catalog: {
		filterredAudi: `${SITE_URL}cars/audi`,
		filterredAudiA1: `${SITE_URL}cars/audi/a1`,
		filterredNoCar: `${SITE_URL}moscow/cars/buick`,
		main: `${SITE_URL}cars`,
	},
	detailCar: {
		location: `${SITE_URL}car/5652/location`,
		main: `${SITE_URL}car/5652`,
	},
	express: {
		deny: `${SITE_URL}dealer/deny`,
		detailCar: `${SITE_URL}dealer/express-car/5749`,
		main: `${SITE_URL}dealer/express`,
	},
	mainPage: {
		filtered: `${SITE_URL}moscow/cars/audi?fromFilter=true`,
		main: `${SITE_URL}`,
	},
};
