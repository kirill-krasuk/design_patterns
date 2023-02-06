import type { Button } from '../interfaces/Button';
import type { GUIFactory } from '../interfaces/GUIFactory';
import type { Title } from '../interfaces/Title';
import type { TitleBar } from '../interfaces/TitleBar';

import { MacTitleBar } from '../classes/mac/MacTitleBar';
import { MacTitle } from '../classes/mac/MacTitle';
import { MacButton } from '../classes/mac/MacButton';

export class MacFactory implements GUIFactory {
	createTitle(text: string): Title {
		return new MacTitle(text);
	}
	createTitleBar(): TitleBar {
		return new MacTitleBar();
	}
	createButton(text: string): Button {
		return new MacButton(text);
	}
}
