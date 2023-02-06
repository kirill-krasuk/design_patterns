import type { NewsObserver } from '../../interfaces/NewsObserver';

/**
 * конкретный субъект
 */
export class NewsCenter {
	private mailingSystems: NewsObserver[] = [];

	public news: string[] = [];

	constructor(public name: string) {}

	attach(mailingSystem: NewsObserver): this {
		this.mailingSystems.push(mailingSystem);

		return this;
	}

	detach(mailingSystem: NewsObserver): this {
		this.mailingSystems = this.mailingSystems.filter((ms) => ms !== mailingSystem);

		return this;
	}

	notify(): void {
		this.mailingSystems.forEach((ms) => ms.update(this));
	}

	writeLatestNews(news: string[]) {
		news.forEach((n) => this.news.push(n));

		this.notify();

		// clear news buffer after
		// notify all systems
		this.news.length = 0;
	}
}
