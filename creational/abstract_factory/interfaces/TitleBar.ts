import { Button } from './Button';
import { Title } from './Title';

export interface TitleBar {
	render(title: Title, closeButton: Button, minimizeButton: Button): string;
}
