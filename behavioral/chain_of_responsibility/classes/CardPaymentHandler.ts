import { PaymentHandler } from '../interfaces/PaymentHandler';

export class CardPaymentHandler extends PaymentHandler {
	handle(amount: number): void {
		if (amount >= 100) {
			console.log('CardPaymentHandler: Processing amount through Card');
			return;
		}

		this.nextHandler?.handle(amount);
	}
}
