import type { TitleBar } from '../interfaces/TitleBar';

export class MacTitleBar implements TitleBar {
	render() {
		return `
        +--------------------+
        |...    MacOS        |
        +--------------------+
        `;
	}
}
