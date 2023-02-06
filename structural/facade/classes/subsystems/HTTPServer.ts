import { Compression } from './Compression';
import { Router } from './Router';
import { Static } from './Static';
import { TemplateEngine } from './TemplateEngine';

export class HTTPServer {
	constructor(
		private router: Router,
		private viewEngine: TemplateEngine,
		private _static: Static,
		private compression: Compression,
	) {}

	listenPort(port: number, address: string) {
		console.log('\nHTTPServer:');
		console.log(`server started at: ${address}:${port}`);
	}
}
