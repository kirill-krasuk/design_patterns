import type { Button } from '../../interfaces/Button';

export class MacButton implements Button {
	constructor(private text: string) {}

	render() {
		return this.text;
	}
}
