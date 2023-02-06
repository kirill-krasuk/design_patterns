import { NotifierDecorator } from './NotifierDecorator';

export class TelegramNotifierDecorator extends NotifierDecorator {
	override notify(message: string): void {
		console.log(`send message to Telegram: ${message} to: ${this.to}`);

		super.notify(message);
	}
}
