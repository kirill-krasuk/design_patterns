import type { CarBuilder } from '../../interfaces/CarBuilder';

import { Car } from '../Car';

import { AudiModel } from '../../enums/model';
import { BodyType } from '../../enums/body_type';
import { Engine } from '../../enums/engine';

export class AudiBuilder implements CarBuilder {
	private color!: string;
	private bodyType!: BodyType;
	private engine!: Engine;
	private isLuxuryPackage = false;
	private isSafetyPackage = false;

	constructor(private model: AudiModel) {}

	build(): Car {
		return new Car(
			'Audi',
			this.model,
			this.color,
			this.bodyType,
			this.engine,
			this.isLuxuryPackage,
			this.isSafetyPackage,
		);
	}

	setColor(color: string): CarBuilder {
		this.color = color;

		return this;
	}

	chooseBodyType(bodyType: BodyType): CarBuilder {
		this.bodyType = bodyType;

		return this;
	}

	setEngine(engine: Engine): CarBuilder {
		this.engine = engine;

		return this;
	}

	setCarLuxury(): CarBuilder {
		this.isLuxuryPackage = true;

		return this;
	}

	setCarSafety(): CarBuilder {
		this.isSafetyPackage = true;

		return this;
	}
}
