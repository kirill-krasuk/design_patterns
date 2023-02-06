import type { CarBuilder } from '../interfaces/CarBuilder';

import { BodyType } from '../enums/body_type';
import { Engine } from '../enums/engine';

export class Director {
	constructor(private builder: CarBuilder) {}

	buildSportCar() {
		const car = this.builder
			.chooseBodyType(BodyType.Coupe)
			.setEngine(Engine.V12)
			.setColor('red')
			.setCarSafety();

		return car;
	}

	buildCivilCar() {
		const car = this.builder
			.chooseBodyType(BodyType.Wagon)
			.setEngine(Engine.Atmospheric)
			.setColor('gray')
			.setCarSafety();

		return car;
	}

	buildLuxuryCar() {
		const car = this.builder
			.chooseBodyType(BodyType.Cabriolet)
			.setEngine(Engine.V8)
			.setColor('galactic_black')
			.setCarSafety()
			.setCarLuxury();

		return car;
	}
}
