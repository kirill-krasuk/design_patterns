import { PaymentHandler } from '../interfaces/PaymentHandler';

export class CryptoPaymentHandler extends PaymentHandler {
	handle(amount: number): void {
		if (amount >= 1000) {
			console.log('CryptoPaymentHandler: Processing amount through Crypto');
			return;
		}

		this.nextHandler?.handle(amount);
	}
}
