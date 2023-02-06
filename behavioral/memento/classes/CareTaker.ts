import { Memento } from '../interfaces/Memento';

/**
 * Опекун - хранит историю состояний объекта Originator
 */
export class CareTaker<T extends Memento> {
	private mementos: T[] = [];
	/**
	 * указатель на текущий снимок, -1 означает что история пуста
	 */
	private current = -1;

	save(memento: T) {
		this.mementos.push(memento);
		this.current++;
	}

	undo(): T | undefined {
		if (this.current >= 0) {
			this.current--;
			return this.mementos[this.current];
		}
		return undefined;
	}

	redo(): T | undefined {
		if (this.current < this.mementos.length - 1) {
			this.current++;
			return this.mementos[this.current];
		}
		return undefined;
	}
}
