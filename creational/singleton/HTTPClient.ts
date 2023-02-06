export class HTTPClient {
	private static instance: HTTPClient;

	private constructor() {}

	static getInstance(): HTTPClient {
		if (!HTTPClient.instance) {
			HTTPClient.instance = new HTTPClient();
		}

		return HTTPClient.instance;
	}
}
