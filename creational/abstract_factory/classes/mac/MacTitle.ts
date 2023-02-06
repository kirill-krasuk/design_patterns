import type { Title } from '../../interfaces/Title';

export class MacTitle implements Title {
	constructor(private text: string) {}

	render() {
		return this.text;
	}
}
