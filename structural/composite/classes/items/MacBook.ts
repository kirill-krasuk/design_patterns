import type { Item } from '../../interfaces/Item';

import { MacBookPrices } from '../../consts/prices';

export class MacBook implements Item {
	private price!: number;
	private weight = 1.5;

	constructor(model: keyof typeof MacBookPrices) {
		this.price = MacBookPrices[model];
	}

	getPrice(): number {
		return this.price;
	}

	getWeight(): number {
		return this.weight;
	}
}
