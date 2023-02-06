import type { NewsCenter } from '../subject/NewsCenter';
import type { NewsObserver } from '../../interfaces/NewsObserver';

/**
 * конкретный наблюдатель за субъектом
 */
export class EmailNotificationSystem implements NewsObserver {
	update(newsCenter: NewsCenter): void {
		console.log(`send by email from ${newsCenter.name}`, {
			data: newsCenter.news,
		});
	}
}
