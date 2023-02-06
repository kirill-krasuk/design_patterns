import { Shop } from '../classes/Shop';

export abstract class Mediated {
	protected shop: Shop;

	setShop(shop: Shop): void {
		this.shop = shop;
	}
}
