import { PaymentHandler } from '../interfaces/PaymentHandler';

export class PayPalPaymentHandler extends PaymentHandler {
	handle(amount: number): void {
		if (amount >= 200) {
			console.log('PayPalPaymentHandler: Processing amount through PayPal');
			return;
		}

		this.nextHandler?.handle(amount);
	}
}
