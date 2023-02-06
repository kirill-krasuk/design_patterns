import type { TitleBar } from '../interfaces/TitleBar';

import { Window } from './Window';
import { WinTitleBar } from '../classes/WinTitleBar';

export class WinWindow extends Window {
	/**
	 * Реализация фабричного метода
	 */
	protected override createTitleBar(): TitleBar {
		return new WinTitleBar();
	}
}
