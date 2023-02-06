import { SMSNotifierDecorator } from './classes/SMSNotifierDecorator';
import { SlackNotifierDecorator } from './classes/SlackNotifierDecorator';
import { EmailNotifier } from './classes/EmailNotifier';
import { TelegramNotifierDecorator } from './classes/TelegramNotifierDecorator';

const notifierSettings = {
	slack: '@Kirill Krasuk',
	sms: null,
	telegram: '@kikiron',
};

let notifier = new EmailNotifier();

if (notifierSettings.slack) {
	notifier = new SlackNotifierDecorator(notifier, notifierSettings.slack);
}

if (notifierSettings.sms) {
	notifier = new SMSNotifierDecorator(notifier, notifierSettings.sms);
}

if (notifierSettings.telegram) {
	notifier = new TelegramNotifierDecorator(notifier, notifierSettings.telegram);
}

notifier.notify('Hello World!');
