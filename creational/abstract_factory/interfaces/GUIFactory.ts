import { Title } from './Title';
import { Button } from './Button';
import { TitleBar } from './TitleBar';

export interface GUIFactory {
	createButton(text: string): Button;
	createTitle(text: string): Title;
	createTitleBar(): TitleBar;
}
