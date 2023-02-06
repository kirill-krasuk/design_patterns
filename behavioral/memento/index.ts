import { TextEditor } from './classes/TextEditor';

/**
 * в этой реализации Memento работает по истории вперед/назад,
 * без возможности взять любой момент истории. Так же CareTaker
 * описан внутри TextEditor что их тесно связывает, так как в данном
 * примере, история нужна только для TextEditor, но может быть случай
 * где undo/redo работает на нескольких классах одновременно и историю
 * можно хранить/отменять последовательно. Тогда CareTaker используется
 * как глобальный объект и развязывается от Originator, в него только
 * передаются снимки
 */
const textEditor = new TextEditor();

textEditor.changeText('Hello world!');
textEditor.changeText('Hello world! How are you?');
textEditor.changeText('Hello world! How are you? I am fine!');

console.log(textEditor.getText());

console.log('\n2 times undo\n');

textEditor.undo();
textEditor.undo();

console.log(textEditor.getText());

console.log('\nand 1 time redo\n');

textEditor.undo();

console.log(textEditor.getText());

console.log('\n1 times redo\n');

textEditor.redo();

console.log(textEditor.getText());
