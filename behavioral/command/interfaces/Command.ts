import { Memento } from '../../memento/interfaces/Memento';
import type { TextEditor } from '../classes/TextEditor';
import type { CommandHistory } from '../classes/memento/CommandsHistory';
import { CommandMemento } from '../classes/memento/CommandMemento';

export type CommandClass = new (...args: any[]) => Command;

export abstract class Command {
	constructor(protected receiver: TextEditor, private history: CommandHistory) {}

	protected args: any[] = [];

	undo(memento: Memento) {
		const _memento = memento as CommandMemento<CommandClass>;

		const [start, end] = _memento.prevSelection;
		const text = _memento.prevText;
		const currentText = _memento.text;

		this.receiver.setSelection(0, currentText.length);
		this.receiver.changeText(text);
		this.receiver.setSelection(start, end);
	}

	protected abstract cancellable: boolean;

	/**
	 * если команда отменяемая, то сохраняем состояние перед выполнением
	 * и сохраняем состояние после выполнения в историю
	 *
	 * реализовано через шаблонный метод
	 */
	execute() {
		if (this.cancellable) {
			const prevText = this.receiver.printText();
			const prevSelection = this.receiver.getSelection();

			this._execute();

			const text = this.receiver.printText();
			const selection = this.receiver.getSelection();

			const memento = new CommandMemento(
				text,
				prevText,
				selection,
				prevSelection,
				this.constructor as CommandClass,
				this.receiver,
				this.history,
				this.args,
			);

			this.history.pushCommand(memento);

			return;
		}

		this._execute();
	}

	protected abstract _execute(): void;
}
