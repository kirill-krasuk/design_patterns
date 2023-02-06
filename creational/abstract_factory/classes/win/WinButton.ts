import type { Button } from '../../interfaces/Button';

export class WinButton implements Button {
	constructor(private text: string) {}

	render() {
		return this.text;
	}
}
