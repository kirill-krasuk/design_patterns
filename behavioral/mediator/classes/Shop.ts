import { Customer } from './mediator-components/Customer';
import { SalesMan } from './mediator-components/SalesMan';
import { Product } from './Product';

export class Shop {
	private salesMans: SalesMan[] = [];
	private customers: Customer[] = [];

	registerSalesMan(salesMan: SalesMan): void {
		this.salesMans.push(salesMan);
		salesMan.setShop(this);
	}

	registerCustomer(customer: Customer): void {
		this.customers.push(customer);
		customer.setShop(this);
	}

	requestInformation(productName: string, customer: Customer): void {
		this.salesMans.forEach((salesMan) => {
			salesMan.receiveRequest(productName, customer);
		});
	}

	offerProduct(product: Product, customer: Customer, salesMan: SalesMan): void {
		customer.receiveOffer(product, salesMan);
	}
}
