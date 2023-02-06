import type { Notifier } from '../interfaces/Notifier';

export class NotifierDecorator implements Notifier {
	constructor(private wrapee: Notifier, protected to: string) {}

	notify(message: string): void {
		this.wrapee.notify(message);
	}
}
