import type { Notifier } from '../interfaces/Notifier';

export class EmailNotifier implements Notifier {
	notify(message: string): void {
		console.log(`send message to Email: ${message}`);
	}
}
