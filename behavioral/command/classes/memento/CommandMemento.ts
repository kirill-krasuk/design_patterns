import type { CommandClass } from '../../interfaces/Command';
import type { CommandHistory } from './CommandsHistory';
import type { Selection, TextEditor } from '../TextEditor';
import type { Memento } from '../../interfaces/Memento';

export type SerializedCommand = {
	name: string;
	args: [string, string, Selection, Selection];
	constructorArgs: any[];
};

export class CommandMemento<T extends CommandClass> implements Memento {
	constructor(
		public text: string,
		public prevText: string,
		public selection: Selection,
		public prevSelection: Selection,
		private commandClass: T,
		private receiver: TextEditor,
		private history: CommandHistory,
		private constructorArgs: any[],
	) {}

	serialize() {
		return JSON.stringify({
			name: this.commandClass.name,
			args: [this.text, this.prevText, this.selection, this.prevSelection],
			constructorArgs: this.constructorArgs,
		});
	}

	deserialize() {
		const Command = this.commandClass;

		return new Command(this.receiver, this.history, ...this.constructorArgs);
	}
}
