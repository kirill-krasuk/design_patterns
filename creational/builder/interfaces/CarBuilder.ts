import { Car } from '../classes/Car';
import { Engine } from '../enums/engine';
import { BodyType } from '../enums/body_type';

export interface CarBuilder {
	setColor(color: string): CarBuilder;
	chooseBodyType(bodyType: BodyType): CarBuilder;
	setEngine(engine: Engine): CarBuilder;
	setCarLuxury(): CarBuilder;
	setCarSafety(): CarBuilder;
	build(): Car;
}
