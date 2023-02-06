export interface HTTPClient {
	get(url: string): string;
	post(url: string, data: string): string;
}
