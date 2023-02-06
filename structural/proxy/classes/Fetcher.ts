import type { HTTPClient } from '../interfaces/HTTPClient';

export class Fetcher implements HTTPClient {
	get(url: string) {
		return `GET ${url} HTTP/1.1`;
	}

	post(url: string, data: string) {
		return `POST ${url} HTTP/1.1\n data: ${data}`;
	}
}
