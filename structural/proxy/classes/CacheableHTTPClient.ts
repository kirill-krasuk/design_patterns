import type { HTTPClient } from '../interfaces/HTTPClient';

import { Fetcher } from './Fetcher';

export class CacheableHTTPClient implements HTTPClient {
	// или используя агрегацию
	private httpClient: HTTPClient = new Fetcher();
	private requests = new Map();

	get(url: string) {
		if (!this.requests.has(`get${url}`)) {
			console.log('make request');
			const response = this.httpClient.get(url);

			this.requests.set(`get${url}`, response);

			return response;
		}
		console.log('from Cache');
		const response = this.requests.get(`get${url}`);

		return response;
	}

	post(url: string, data: string) {
		if (!this.requests.has(`post${url}`)) {
			console.log('make request');
			const response = this.httpClient.post(url, data);

			this.requests.set(`post${url}`, response);

			return response;
		}
		console.log('from Cache');
		const response = this.requests.get(`post${url}`);

		return response;
	}
}
