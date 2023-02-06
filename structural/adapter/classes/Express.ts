class Express {
	constructor(options: any) {
		console.log('Create HTTP server with options', options);
	}

	use(path: string) {
		console.log('server static by path', path);
	}

	listen(port: number, address: string) {
		console.log('server run on', port, 'and address:', address);
	}
}

export { Express };
