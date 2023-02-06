import type { Server } from '../../interfaces/Server';

import { Fastify } from '../Fastify';

class FastifyToServerAdapter implements Server {
	constructor(private server: Fastify) {}

	create(options: any): void {
		this.server.initialize(options);
	}

	serveStatic(pathToStatic: string): void {
		this.server.register(pathToStatic);
	}

	async listen(port: number): Promise<void> {
		this.server.serve(port, 'localhost');
	}
}

export { FastifyToServerAdapter };
