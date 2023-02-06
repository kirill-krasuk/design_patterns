/* eslint-disable prefer-const */
import { InputTextCommand } from './classes/commands/InputTextCommand';
import { SelectTextCommand } from './classes/commands/SelectTextCommand';
import { UpperCaseCommand } from './classes/commands/UpperCaseCommand';
import { DeleteTextCommand } from './classes/commands/DeleteTextCommand';
import { CommandHistory } from './classes/memento/CommandsHistory';
import { TextEditor } from './classes/TextEditor';
import { TextEditorInvoker } from './classes/TextInvoker';

const editor = new TextEditor();

const history = new CommandHistory(editor, {
	DeleteTextCommand,
	UpperCaseCommand,
	SelectTextCommand,
	InputTextCommand,
});

const invoker = new TextEditorInvoker(editor, history);

console.log('1. ', editor.printText());

invoker.input('Hello');

console.log('2. ', editor.printText());

invoker.selectText(0, 3);
invoker.toUpperCase();

let savedHistory = history.downloadHistory();

console.log('3. ', editor.printText());

invoker.selectText(5, 5);
invoker.input(' world!');

console.log('4. ', editor.printText());

invoker.selectText(0, 3);
invoker.deleteText();

savedHistory = history.downloadHistory();

console.log('5. ', editor.printText());

invoker.undo();
invoker.undo();
invoker.undo();

console.log('6. ', editor.printText());

history.loadHistory(savedHistory);

console.log('7. ', editor.printText());
