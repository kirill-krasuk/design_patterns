import type { Server } from '../interfaces/Server';

class MyServer implements Server {
	create(options: any) {
		console.log('Create HTTP server with options', options);
	}

	serveStatic(pathToStatic: string) {
		console.log('server static by path', pathToStatic);
	}

	async listen(port: number) {
		console.log(`Server listen ${port}`);
	}
}

export { MyServer };
