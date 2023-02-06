import type { TitleBar } from '../interfaces/TitleBar';

export abstract class Window {
	render() {
		const titleBar = this.createTitleBar();

		console.log(`
        ${titleBar.render()}
        |                    |
        |        body        |
        |                    |
        +____________________+
        `);
	}

	/**
	 * Это и есть фабричный метод. который будет определен
	 * дочерними классами.
	 * Создатель так же может определить метода по-умолчанию.
	 */
	protected abstract createTitleBar(): TitleBar;
}
