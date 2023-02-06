import { PayPalPayment } from './classes/strategies/PayPalPayment';
import { CardPayment } from './classes/strategies/CardPayment';
import { ShoppingCart } from './classes/ShoppingCart';

const shoppingCart = new ShoppingCart();

const paymentTypes = {
	card: new CardPayment(),
	payPal: new PayPalPayment(),
};

shoppingCart.addItem({ name: 'T-shirt', price: 100 });
shoppingCart.addItem({ name: 'Socks', price: 50 });
shoppingCart.addItem({ name: 'Jacket', price: 200 });

// юзер выбрал оплату картой
shoppingCart.setPaymentStrategy(paymentTypes.card);
shoppingCart.pay();

setTimeout(() => {
	// юзер выбрал оплату PayPal
	shoppingCart.setPaymentStrategy(paymentTypes.payPal);
	shoppingCart.pay();
}, 1500);
