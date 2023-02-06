import { WebpackPlugin } from './classes/base/WebpackPlugin';
import { DeadCodeWebpackPlugin } from './classes/DeadCodeWebpackPlugin';
import { HTMLWebpackPlugin } from './classes/HTMLWebpackPlugin';

// обходим все зависимости в проекте и собираем их в один файл index.html
let webpackPlugin: WebpackPlugin = new HTMLWebpackPlugin('index.html');

console.log(webpackPlugin.run(), '---------\n\n');

// удаляем неиспользуемый код и обьединяем его в один файл index.ts
webpackPlugin = new DeadCodeWebpackPlugin();

console.log(webpackPlugin.run());

// в консоли можно увидеть, что в index.html добавился скрипт с содержимым index.ts
// а в index.ts добавился неиспользуемый код из файла sum.ts
