import type { PaymentStrategy } from '../../interfaces/PaymentStrategy';

export class PayPalPayment implements PaymentStrategy {
	pay(amount: number): void {
		console.log(`PayPal process: ${amount}`);
	}
}
