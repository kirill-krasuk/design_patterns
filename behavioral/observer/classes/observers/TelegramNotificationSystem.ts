import type { NewsObserver } from '../../interfaces/NewsObserver';
import type { NewsCenter } from '../subject/NewsCenter';

/**
 * конкретный наблюдатель за субъектом
 */
export class TelegramNotificationSystem implements NewsObserver {
	update(newsCenter: NewsCenter): void {
		console.log(`send from ${newsCenter.name} into telegram`, {
			data: newsCenter.news,
		});
	}
}
