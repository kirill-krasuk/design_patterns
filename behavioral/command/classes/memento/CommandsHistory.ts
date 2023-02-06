import type { CommandClass } from '../../interfaces/Command';
import { Memento } from '../../interfaces/Memento';
import { TextEditor } from '../TextEditor';
import { CommandMemento, SerializedCommand } from './CommandMemento';

export class CommandHistory {
	public history: Memento[] = [];

	constructor(
		private receiver: TextEditor,
		private supportsCommands: Record<string, CommandClass>,
	) {}

	pushCommand(memento: Memento) {
		this.history.push(memento);
	}

	undo() {
		const commandMemento = this.history.pop();

		if (commandMemento) {
			const command = commandMemento.deserialize();

			command.undo(commandMemento);
		}
	}

	loadHistory(history: string) {
		const historyObject = JSON.parse(history).map(JSON.parse);

		// заменить на команду очистки текста
		this.receiver.clear();

		this.history = historyObject.map((item: SerializedCommand) => {
			const CommandClass = this.supportsCommands[item.name];

			const [text, prevText, selection, prevSelection] = item.args;

			const command = new CommandMemento(
				text,
				prevText,
				selection,
				prevSelection,
				CommandClass,
				this.receiver,
				this,
				item.constructorArgs,
			);

			return command;
		});

		this.history.forEach((item) => {
			item.deserialize().execute();
		});
	}

	downloadHistory() {
		const serializedHistory = this.history.map((item) => item.serialize());

		return JSON.stringify(serializedHistory);
	}
}
