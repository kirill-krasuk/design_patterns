import { DefaultPaymentHandler } from './classes/DefaultPaymentHandler';
import { PayPalPaymentHandler } from './classes/PayPalPaymentHandler';
import { CryptoPaymentHandler } from './classes/CryptoPaymentHandler';
import { CardPaymentHandler } from './classes/CardPaymentHandler';

const paymentHandler = new CryptoPaymentHandler();

paymentHandler
	.setNext(new PayPalPaymentHandler())
	.setNext(new CardPaymentHandler())
	.setNext(new DefaultPaymentHandler());

paymentHandler.handle(2100);

// через какое-то время юзер захотел вывести еще какое-то количество денег
setTimeout(() => {
	paymentHandler.handle(40);
});
