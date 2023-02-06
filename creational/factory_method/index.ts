import { WinWindow } from './factories/WinWindow';
import { MacWindow } from './factories/MacWindow';

function getOSSpecificWindow(type: 'macos' | 'windows') {
	switch (type) {
	/**
		 * Выбираем runtime конкретную реализацию
		 * окна благодаря фабричного метода, мы
		 * используем сложные, отличающиеся чем-то
		 * друг от друга объекты, но расширяем создание
		 * подобных объектов без какого либо труда.
		 * Так как конкретные создатели MacWindow | WinWindow
		 * или еще если добавятся, отвечают только за создание нужно объекта
		 * а бизнес логику провайдит абстрактный класс Window
		 */
	case 'macos':
		return new MacWindow();
	case 'windows':
		return new WinWindow();
	default:
		return new MacWindow();
	}
}

const window = getOSSpecificWindow('macos');

window.render();
