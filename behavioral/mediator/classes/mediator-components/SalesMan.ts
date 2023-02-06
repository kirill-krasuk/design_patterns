import { Product } from '../Product';
import { Mediated } from '../../interfaces/Mediated';
import { Customer } from './Customer';

export class SalesMan extends Mediated {
	private products: Product[] = [];

	constructor(private name: string) {
		super();
	}

	getName(): string {
		return this.name;
	}

	addProduct(product: Product): void {
		this.products.push(product);
	}

	hasProduct(productName: string): boolean {
		return this.products.some(
			(product) => product.getName() === productName && product.getQuantity() > 0,
		);
	}

	receiveRequest(productName: string, customer: Customer): void {
		const product = this.products.find(this.hasProduct.bind(this, productName));
		if (product) {
			this.shop.offerProduct(product, customer, this);
		}
	}
}
