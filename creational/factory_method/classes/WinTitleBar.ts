import type { TitleBar } from '../interfaces/TitleBar';

export class WinTitleBar implements TitleBar {
	render() {
		return `
        +--------------------+
        | Windows         _ X|
        +--------------------+
        `;
	}
}
