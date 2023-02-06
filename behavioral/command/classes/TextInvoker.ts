import { SelectTextCommand } from './commands/SelectTextCommand';
import { DeleteTextCommand } from './commands/DeleteTextCommand';
import { InputTextCommand } from './commands/InputTextCommand';
import { UpperCaseCommand } from './commands/UpperCaseCommand';
import { CommandHistory } from './memento/CommandsHistory';
import { TextEditor } from './TextEditor';

export class TextEditorInvoker {
	constructor(private textEditor: TextEditor, private history: CommandHistory) {}

	// команды можно вызывать и так. но мы определим интерфейс для каждой
	// executeCommand(command: Command) {
	// 	command.execute();
	// }

	input(text: string) {
		const command = new InputTextCommand(this.textEditor, this.history, text);

		command.execute();
	}

	deleteText() {
		const command = new DeleteTextCommand(this.textEditor, this.history);

		command.execute();
	}

	toUpperCase() {
		const command = new UpperCaseCommand(this.textEditor, this.history);

		command.execute();
	}

	selectText(start: number, end: number) {
		const command = new SelectTextCommand(this.textEditor, this.history, start, end);

		command.execute();
	}

	undo() {
		this.history.undo();
	}
}
