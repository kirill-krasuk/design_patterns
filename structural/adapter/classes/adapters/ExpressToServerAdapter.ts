import type { Server } from '../../interfaces/Server';

import { Express } from '../Express';

class ExpressToServerAdapter implements Server {
	private server!: Express;

	create(options: any): void {
		this.server = new Express(options);
	}

	serveStatic(pathToStatic: string): void {
		this.server.use(pathToStatic);
	}

	async listen(port: number): Promise<void> {
		this.server.listen(port, 'localhost');
	}
}

export { ExpressToServerAdapter };
