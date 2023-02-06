import type { PaymentStrategy } from '../../interfaces/PaymentStrategy';

export class CardPayment implements PaymentStrategy {
	pay(amount: number): void {
		console.log(`Card process: ${amount}`);
	}
}
