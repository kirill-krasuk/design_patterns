export abstract class PaymentHandler {
	protected nextHandler?: PaymentHandler;

	setNext(handler: PaymentHandler): PaymentHandler {
		this.nextHandler = handler;

		return this.nextHandler;
	}

	abstract handle(amount: number): void;
}
