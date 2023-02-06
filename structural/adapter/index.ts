import type { Server } from './interfaces/Server';

import { ExpressToServerAdapter } from './classes/adapters/ExpressToServerAdapter';
import { FastifyToServerAdapter } from './classes/adapters/FastifyToServerAdapter';
import { Fastify } from './classes/Fastify';
import { MyServer } from './classes/MyServer';

const myServer = new MyServer();

// fastify adapter использует агрегацию, хотя в случаях когда адаптер пишется
// под конкретную библиотеку можно использовать композицию, так как никто больше не
// повторит интерфейс библиотеки, кроме неё самой. В целом использование копмозиции или агрегации
// зависит от нужд проекта, хоть чаще всего рекомендуется использовать агрегации
const fastifyServer = new FastifyToServerAdapter(new Fastify());

// express adapter инициализирует инстанс в себе(композиция) из-за
// того, что в Server конфигурация Express нужна в методе create. у Fastify
// инстанса передача параметров осуществлялась не через конструктор, а через метод
// это можно допустить, так как семантически инстанс может быть только один
// и ничего нету плохого в тесной связанности адаптера с адаптируемым классом, так как это адаптер
// поверх библиотечного интерфейса
const expressServer = new ExpressToServerAdapter();

function createServer(server: Server) {
	console.log(server);
	server.create({
		http2: false,
	});
	server.serveStatic('/public');
	server.listen(3000);
}

console.log('Simple Server\n');
createServer(myServer);
console.log('\n');

console.log('Express Server\n');
createServer(expressServer);
console.log('\n');

console.log('Fastify Server\n');
createServer(fastifyServer);
console.log('\n');
