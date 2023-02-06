class Fastify {
	initialize(options: any) {
		console.log('Create HTTP server with options', options);
	}

	register(path: string) {
		console.log('server static by path', path);
	}

	serve(port: number, address: string) {
		console.log('server run on', port, 'and address:', address);
	}
}

export { Fastify };
