import type { TitleBar } from '../interfaces/TitleBar';

import { Window } from './Window';
import { MacTitleBar } from '../classes/MaсTitleBar';

export class MacWindow extends Window {
	/**
	 * Реализация фабричного метода
	 */
	protected override createTitleBar(): TitleBar {
		return new MacTitleBar();
	}
}
