import { CareTaker } from './CareTaker';
import { TextMemento } from './TextMemento';

/**
 * на обобщенных диаграммах классов, этот класс можно встретить
 * с именем Originator
 */
export class TextEditor {
	private text = 'Placeholder text';
	private careTaker: CareTaker<TextMemento>;

	constructor() {
		this.careTaker = new CareTaker();
		this.careTaker.save(new TextMemento(this.text));
	}

	changeText(text: string): void {
		this.text = text;
		this.careTaker.save(new TextMemento(this.text));
	}

	getText(): string {
		return this.text;
	}

	undo(): void {
		const memento = this.careTaker.undo();
		if (memento) {
			this.text = memento.getText();
		}
	}

	redo(): void {
		const memento = this.careTaker.redo();
		if (memento) {
			this.text = memento.getText();
		}
	}
}
