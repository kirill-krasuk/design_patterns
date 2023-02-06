import { PaymentHandler } from '../interfaces/PaymentHandler';

export class DefaultPaymentHandler extends PaymentHandler {
	handle(amount: number): void {
		if (amount < 100) {
			console.log('DefaultPaymentHandler: not enough money for processing ');
		}
	}
}
