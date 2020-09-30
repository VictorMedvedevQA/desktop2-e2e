import { CarCardPage } from '../pages/car-card/car-card.page';
import { GallerySpec } from '../shared/gallery/gallery.spec';
import { urls } from '../support/urls';
import { FormTestingSpec } from '../shared/form-testing/form-testing.spec';
import { CarCardSpec } from '../shared/car-card/car-card.spec';

const carCardSpec = new CarCardSpec();
const gallerySpec = new GallerySpec();
const carCardPage = new CarCardPage();
const formTestingSpec = new FormTestingSpec();

describe('проверка работы основных элементов в карточке Авто', () => {

	carCardSpec.sectionButtonsTest();
	carCardSpec.mainPageFormsTesting();
	carCardSpec.galleryTest();
});

describe('Проверка поля "Техническое состояние"', () => {

	carCardSpec.conditionTest();
});

describe('Проверка поля "Комплектация и документы"', () => {
	carCardSpec.equipmentTest();
});

describe('Проверка поля "Юридическая чистота"', () => {
	carCardSpec.juridicalTest();
});

describe('Проверка поля "Адрес тест-драйва"', () => {
	carCardSpec.locationTest();
});
