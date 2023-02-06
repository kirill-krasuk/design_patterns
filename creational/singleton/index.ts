import { HTTPClient } from './HTTPClient';

const http1 = HTTPClient.getInstance();
const http2 = HTTPClient.getInstance();

/**
 * Доказательства работы паттерна Singleton
 * ссылки на объект идентичны
 */
console.log(http1 === http2);
