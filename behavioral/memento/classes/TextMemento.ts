import { Memento } from '../interfaces/Memento';

export class TextMemento implements Memento {
	private text = '';

	constructor(text: string) {
		this.text = text;
	}

	getText(): string {
		return this.text;
	}
}
