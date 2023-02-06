import type { Element } from '../../interfaces/Element';
import type { Visitor } from '../../interfaces/Visitor';

export class Text implements Element {
	public value = '';

	setValue(value: any): void {
		this.value = value;
	}

	accept(visitor: Visitor): void {
		visitor.visitText(this);
	}
}
