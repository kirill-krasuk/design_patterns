import { Engine } from '../enums/engine';
import { BodyType } from '../enums/body_type';

/**
 * сложный класс в инициализации
 * очень много полей, которые нужно заполнить
 * но не факт что они нам нужны и думать постоянно
 * о них, при создании объекта - неудобная вещь
 */
export class Car {
	constructor(
		private manufacturer: string,
		private model: string,
		private color: string,
		private bodyType: BodyType,
		private engine: Engine,
		private isLuxuryPackage: boolean,
		private isSafetyPackage: boolean,
	) {}
}
