import util from 'util';

import { IPad } from './classes/items/iPad';
import { IPhone } from './classes/items/iPhone';
import { Box } from './classes/Box';
import { MacBook } from './classes/items/MacBook';

const smallBox = new Box();

smallBox.addItem(new IPhone('11 pro'));
smallBox.addItem(new IPhone('12 pro'));
smallBox.addItem(new IPhone('12 pro'));
smallBox.addItem(new IPhone('13 pro max'));

console.log(`small box price: ${smallBox.getPrice()}, weight: ${smallBox.getWeight()}`);

const mediumBox = new Box();

mediumBox.addItem(new IPad('air'));
mediumBox.addItem(new IPad('pro'));
mediumBox.addItem(new IPad('air'));

console.log(
	`\nmedium box price: ${mediumBox.getPrice()}, weight: ${mediumBox.getWeight()}`,
);

mediumBox.addItem(smallBox);

console.log(
	`medium box + small box price: ${mediumBox.getPrice()}, weight: ${mediumBox.getWeight()}`,
);

const bigBox = new Box();

bigBox.addItem(new MacBook('16pro'));
bigBox.addItem(new MacBook('14pro'));
bigBox.addItem(new MacBook('16pro'));

console.log(`\nbig box price: ${bigBox.getPrice()}, weight: ${bigBox.getWeight()}`);

bigBox.addItem(mediumBox);

console.log(`\nall boxes price: ${bigBox.getPrice()}, weight: ${bigBox.getWeight()}`);

console.log('\n', util.inspect(bigBox, false, null, true /* enable colors */));
