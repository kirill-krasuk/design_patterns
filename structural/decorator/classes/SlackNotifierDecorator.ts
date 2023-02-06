import { NotifierDecorator } from './NotifierDecorator';

export class SlackNotifierDecorator extends NotifierDecorator {
	override notify(message: string): void {
		console.log(`send message to Slack: ${message} to: ${this.to}`);

		super.notify(message);
	}
}
