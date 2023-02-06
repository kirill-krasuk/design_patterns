import { TemplateEngine } from './subsystems/TemplateEngine';
import { Compression } from './subsystems/Compression';
import { Router } from './subsystems/Router';
import { Static } from './subsystems/Static';
import { HTTPServer } from './subsystems/HTTPServer';

export class Server {
	start(port: number, address: string) {
		const _static = new Static();
		const router = new Router();
		const compression = new Compression();
		const viewEngine = new TemplateEngine();

		_static.registerStaticFolder('/dist/');

		router.addRoute('/');
		router.addRoute('/user');
		router.addRoute('/posts');
		router.addRoute('/comments');
		router.addRoute('/videos/add');

		compression.compressFilesByRegex(/\.(js|css|html)/);

		viewEngine.setViewEngine('pug');

		new HTTPServer(router, viewEngine, _static, compression).listenPort(
			port,
			address,
		);
	}
}
