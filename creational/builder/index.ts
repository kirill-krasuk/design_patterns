import { BMWModel, AudiModel } from './enums/model';
import { AudiBuilder } from './classes/builders/AudiBuilder';
import { BMWBuilder } from './classes/builders/BMWBuilder';
import { Director } from './classes/Director';

const bmwDirector = new Director(new BMWBuilder(BMWModel.MFour));
const audiDirector = new Director(new AudiBuilder(AudiModel.S8));

console.log(
	'Sport Bmw: ',
	bmwDirector.buildSportCar(),
	'Audi Luxury',
	audiDirector.buildLuxuryCar(),
);
