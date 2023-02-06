import type { PaymentStrategy } from '../interfaces/PaymentStrategy';

type Item = {
	price: number;
	name: string;
};
type Items = Array<Item>;

/**
 * это Context выполнения для стратегий
 */
export class ShoppingCart {
	private paymentStrategy: PaymentStrategy;
	private items: Items = [];

	setPaymentStrategy(paymentStrategy: PaymentStrategy) {
		this.paymentStrategy = paymentStrategy;
	}

	addItem(item: Item) {
		this.items.push(item);
	}

	getItems() {
		return this.items;
	}

	getTotal() {
		return this.items.reduce((acc, curr) => acc + curr.price, 0);
	}

	pay() {
		this.paymentStrategy.pay(this.getTotal());
	}
}
