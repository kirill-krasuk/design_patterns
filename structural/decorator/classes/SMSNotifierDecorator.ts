import { NotifierDecorator } from './NotifierDecorator';

export class SMSNotifierDecorator extends NotifierDecorator {
	override notify(message: string): void {
		console.log(`send message to SMS: ${message} to: ${this.to}`);

		super.notify(message);
	}
}
