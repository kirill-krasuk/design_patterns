import { Command } from '../../interfaces/Command';

export class DeleteTextCommand extends Command {
	protected override cancellable = true;

	protected override _execute() {
		const [start, end] = this.receiver.getSelection();

		this.receiver.setSelection(start, end);
		this.receiver.changeText('');
	}
}
