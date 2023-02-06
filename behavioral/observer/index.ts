import { TelegramNotificationSystem } from './classes/observers/TelegramNotificationSystem';
import { EmailNotificationSystem } from './classes/observers/EmailNotificationSystem';

import { NewsCenter } from './classes/subject/NewsCenter';

/**
 * создание конкретных субъектов
 */
const CNN = new NewsCenter('CNN');
const AutoReviewTG = new NewsCenter('ARTG');

/**
 * привязка наблюдателей к субъектам
 */
CNN.attach(new EmailNotificationSystem());
CNN.attach(new TelegramNotificationSystem());

AutoReviewTG.attach(new TelegramNotificationSystem());

CNN.writeLatestNews([
	'panda kungfu win in karate tournament',
	'bmw release new generate auto',
	'mercedes closed production',
]);

AutoReviewTG.writeLatestNews([
	'bmw release new generate auto',
	'mercedes closed production',
]);
