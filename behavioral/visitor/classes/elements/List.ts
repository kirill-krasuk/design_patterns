import type { Element } from '../../interfaces/Element';
import type { Visitor } from '../../interfaces/Visitor';

export class List implements Element {
	public value: string[] = [];

	setValue(value: string[]): void {
		this.value = value;
	}

	accept(visitor: Visitor): void {
		visitor.visitList(this);
	}
}
