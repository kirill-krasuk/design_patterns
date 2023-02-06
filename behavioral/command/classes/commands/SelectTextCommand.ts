import { Command } from '../../interfaces/Command';
import type { CommandHistory } from '../memento/CommandsHistory';
import type { TextEditor } from '../TextEditor';

export class SelectTextCommand extends Command {
	protected override cancellable = true;

	constructor(
		receiver: TextEditor,
		history: CommandHistory,
		protected start: number,
		protected end: number,
	) {
		super(receiver, history);
		this.args.push(start, end);
	}

	protected override _execute() {
		this.receiver.setSelection(this.start, this.end);
	}
}
