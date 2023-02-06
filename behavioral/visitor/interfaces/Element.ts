import { Visitor } from './Visitor';

export interface Element {
	setValue(value: any): void;
	accept(visitor: Visitor): void;
}
