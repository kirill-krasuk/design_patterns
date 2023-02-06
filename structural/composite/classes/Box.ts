import type { Item } from '../interfaces/Item';

export class Box implements Item {
	private items: Item[] = [];

	addItem(item: Item) {
		this.items.push(item);
	}

	removeItem(item: Item) {
		this.items = this.items.filter((i) => i !== item);
	}

	getItems() {
		return this.items;
	}

	getPrice(): number {
		return this.items.reduce((acc, curr) => acc + curr.getPrice(), 0);
	}

	getWeight(): number {
		return this.items.reduce((acc, curr) => acc + curr.getWeight(), 0);
	}
}
