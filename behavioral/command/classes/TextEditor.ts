export type Selection = [number, number];

export class TextEditor {
	private text = '';
	private selection: Selection = [0, 0];

	getSelection() {
		return this.selection;
	}

	setSelection(start: number, end: number) {
		this.selection = [start, end];
	}

	printText() {
		return this.text;
	}

	private _insertText(text: string, start: number, end: number) {
		return this.text.slice(0, start) + text + this.text.slice(end);
	}

	insertText(text: string, position: number) {
		this.text = this._insertText(text, position, position);
	}

	changeText(text: string) {
		const [start, end] = this.selection;
		this.text = this._insertText(text, start, end);
		this.setSelection(this.text.length, this.text.length);
	}

	clear() {
		this.text = '';
		this.setSelection(0, 0);
	}
}
