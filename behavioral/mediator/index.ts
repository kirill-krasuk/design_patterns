import { Customer } from './classes/mediator-components/Customer';
import { SalesMan } from './classes/mediator-components/SalesMan';
import { Product } from './classes/Product';
import { Shop } from './classes/Shop';

/**
 * в этом примере показано, как можно использовать паттерн посредник для
 * упрощения взаимодействия между объектами.
 *
 * Этот пример реализует посредник как обсервер, который следит за изменениями
 * в объектах, которые он наблюдает и реализует связь много ко многим.
 *
 * Так же посредник может использоваться для выноса логики взаимодействия
 * между объектами в одно место, что позволяет легко изменять эту логику.
 * То есть в отличии от этого примера посредник может быть реализован
 * как класс, который будет содержать в себе логику взаимодействия между
 * объектами.
 */
const shop = new Shop();

const customer = new Customer();

const salesMan1 = new SalesMan('John');
const salesMan2 = new SalesMan('Jack');
const salesMan3 = new SalesMan('Jill');

shop.registerSalesMan(salesMan1);
shop.registerSalesMan(salesMan2);
shop.registerCustomer(customer);

salesMan1.addProduct(new Product('iPhone 11', 700, 2));
salesMan2.addProduct(new Product('iPhone 11', 750, 1));
salesMan3.addProduct(new Product('iPhone 11', 800, 0));

salesMan1.addProduct(new Product('iPhone 14 Pro', 1100, 2));

customer.requestProductInfo('iPhone 11');
customer.buyBestOffer();
