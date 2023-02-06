import { Car } from './Car';

const car1 = new Car('x5', 'crossover', 25000);
const car2 = car1.clone();

console.log(car1, car2);

car2.setModel('x6');

console.log(car1, car2);
