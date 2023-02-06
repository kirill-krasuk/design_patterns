import type { TitleBar } from './interfaces/TitleBar';

import { WinFactory } from './factories/WinFactory';
import { MacFactory } from './factories/MacFactory';

const macOptions = {
	closeButton: '.',
	minimizeButton: '.',
	title: 'MacOS',
};

const winOptions = {
	closeButton: 'X',
	minimizeButton: '_',
	title: 'Windows',
};

/**
 * Для выбора нужной фабрики для операционной
 * системы можно было использовать и SimpleFactory,
 * так как это локальный конфиг, а фабрика создающая
 * ветвь абстрактной фабрики могла бы пригодится в любой
 * чисти приложения.
 */
const OSMap = {
	macos: {
		factory: new MacFactory(),
		options: macOptions,
	},
	windows: {
		factory: new WinFactory(),
		options: winOptions,
	},
};

function createTitleBarFacade(type: 'windows' | 'macos'): ReturnType<TitleBar['render']> {
	const currentOS = OSMap[type];

	const { closeButton: cB, minimizeButton: mB, title: t } = currentOS.options;

	const { factory } = currentOS;

	/**
	 * Button, Title, TitleBar - семейство компонентов, различных в разных OS
	 * так же они могут взаимодействовать между собой
	 */
	const closeButton = factory.createButton(cB);
	const minimizeButton = factory.createButton(mB);
	const title = factory.createTitle(t);

	return factory.createTitleBar().render(title, closeButton, minimizeButton);
}

const titleBar = createTitleBarFacade('macos');

console.log(titleBar);
