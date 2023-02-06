import { Command } from '../../interfaces/Command';

export class UpperCaseCommand extends Command {
	protected override cancellable = true;

	protected override _execute() {
		const text = this.receiver.printText();
		const selection = this.receiver.getSelection();

		const cuttedText = text.slice(selection[0], selection[1]);

		this.receiver.changeText(cuttedText.toUpperCase());
	}
}
