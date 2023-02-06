import type { Item } from '../../interfaces/Item';

import { iPadPrices } from '../../consts/prices';

export class IPad implements Item {
	private price!: number;
	private weight = 0.5;

	constructor(model: keyof typeof iPadPrices) {
		this.price = iPadPrices[model];
	}

	getPrice(): number {
		return this.price;
	}

	getWeight(): number {
		return this.weight;
	}
}
