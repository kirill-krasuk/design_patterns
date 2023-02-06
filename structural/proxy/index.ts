import type { HTTPClient } from './interfaces/HTTPClient';

import { CacheableHTTPClient } from './classes/CacheableHTTPClient';
import { Fetcher } from './classes/Fetcher';

let httpClient: HTTPClient = new Fetcher();

console.log(httpClient.get('/user'));
console.log(httpClient.get('/user'));
console.log(httpClient.get('/user/2'));
console.log(httpClient.get('/user'));
console.log(httpClient.post('/users', JSON.stringify({ name: 'Kirill', age: 25 })));

console.log('\n use proxy \n');

httpClient = new CacheableHTTPClient();

console.log(httpClient.get('/user'), '\n');
console.log(httpClient.get('/user'), '\n');
console.log(httpClient.get('/user/2'), '\n');
console.log(httpClient.get('/user'), '\n');
console.log(httpClient.post('/users', JSON.stringify({ name: 'Kirill', age: 25 })), '\n');
console.log(httpClient.post('/users', JSON.stringify({ name: 'Kirill', age: 25 })), '\n');
console.log(httpClient.post('/users', JSON.stringify({ name: 'Kirill', age: 25 })), '\n');
