import type { Button } from '../../interfaces/Button';
import type { Title } from '../../interfaces/Title';
import type { TitleBar } from '../../interfaces/TitleBar';

export class WinTitleBar implements TitleBar {
	render(title: Title, closeButton: Button, minimizeButton: Button): string {
		return `
        +--------------------+
        |${title.render()}           ${minimizeButton.render()}${closeButton.render()}|
        +--------------------+
        `;
	}
}
