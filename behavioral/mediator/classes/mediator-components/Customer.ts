import { Mediated } from '../../interfaces/Mediated';
import { Product } from '../Product';
import { SalesMan } from './SalesMan';

export class Customer extends Mediated {
	private offers: [Product, SalesMan][] = [];

	requestProductInfo(productName: string): void {
		this.shop.requestInformation(productName, this);
	}

	receiveOffer(product: Product, salesMan: SalesMan): void {
		console.log(
			`Customer received offer from ${salesMan.getName()}: ${product.getName()} for ${product.getPrice()}`,
		);

		this.offers.push([product, salesMan]);
	}

	buyBestOffer(): void {
		const bestOffer = this.offers.reduce((best, current) => {
			const currentProduct = current[0];
			const bestProduct = best[0];

			if (currentProduct.getPrice() < bestProduct.getPrice()) {
				return current;
			}

			return best;
		}, this.offers[0]);

		const [product, salesMan] = bestOffer;

		console.log(`Customer bought ${product.getName()} from ${salesMan.getName()}`);
	}
}
