import { Command } from '../../interfaces/Command';
import { CommandHistory } from '../memento/CommandsHistory';
import { TextEditor } from '../TextEditor';

export class InputTextCommand extends Command {
	protected override cancellable = true;

	constructor(receiver: TextEditor, history: CommandHistory, private text: string) {
		super(receiver, history);
		this.args.push(text);
	}

	protected override _execute() {
		const [start, end] = this.receiver.getSelection();

		this.receiver.setSelection(start, end);
		this.receiver.changeText(this.text);
	}
}
