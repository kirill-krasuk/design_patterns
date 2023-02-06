export class Product {
	constructor(private name: string, private price: number, private quantity: number) {}

	getName(): string {
		return this.name;
	}

	getPrice(): number {
		return this.price;
	}

	getQuantity(): number {
		return this.quantity;
	}
}
