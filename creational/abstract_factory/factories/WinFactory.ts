import type { Button } from '../interfaces/Button';
import type { GUIFactory } from '../interfaces/GUIFactory';
import type { Title } from '../interfaces/Title';
import type { TitleBar } from '../interfaces/TitleBar';

import { WinTitleBar } from '../classes/win/WinTitleBar';
import { WinTitle } from '../classes/win/WinTitle';
import { WinButton } from '../classes/win/WinButton';

export class WinFactory implements GUIFactory {
	createTitle(text: string): Title {
		return new WinTitle(text);
	}
	createTitleBar(): TitleBar {
		return new WinTitleBar();
	}
	createButton(text: string): Button {
		return new WinButton(text);
	}
}
