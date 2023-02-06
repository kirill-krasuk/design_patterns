import type { Item } from '../../interfaces/Item';

import { iPhonePrices } from '../../consts/prices';

export class IPhone implements Item {
	private price!: number;
	private weight = 0.1;

	constructor(model: keyof typeof iPhonePrices) {
		this.price = iPhonePrices[model];
	}

	getPrice(): number {
		return this.price;
	}

	getWeight(): number {
		return this.weight;
	}
}
