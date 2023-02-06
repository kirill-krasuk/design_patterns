import type { Title } from '../../interfaces/Title';

export class WinTitle implements Title {
	constructor(private text: string) {}

	render() {
		return this.text;
	}
}
