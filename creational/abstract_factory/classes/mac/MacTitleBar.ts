import type { Button } from '../../interfaces/Button';
import type { Title } from '../../interfaces/Title';
import type { TitleBar } from '../../interfaces/TitleBar';

export class MacTitleBar implements TitleBar {
	render(title: Title, closeButton: Button, minimizeButton: Button): string {
		return `
        +--------------------+
        |${closeButton.render()}${minimizeButton.render()}      ${title.render()}       |
        +--------------------+
        `;
	}
}
