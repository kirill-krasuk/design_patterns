import type { Element } from './interfaces/Element';

import { Text } from './classes/elements/Text';
import { Paragraph } from './classes/elements/Paragraph';
import { ListItem } from './classes/elements/ListItem';
import { List } from './classes/elements/List';

import { HTMLVisitor } from './classes/visitors/HTMLVisitor';
import { MDVisitor } from './classes/visitors/MDVisitor';

const text = new Text();
const paragraph = new Paragraph();
const listItem = new ListItem();
const list = new List();

/**
 * заметно прослеживается связь с компоновщиком или итератором
 * так как мы можем собрать (в данном случае в массиве) родные элементы
 * и пройтись по ним всем применив к ним посетителя
 */
const doc: Element[] = [paragraph, list];

text.setValue('text');
paragraph.setValue('paragraph');
listItem.setValue('listItem');
list.setValue(['list', 'text', 'paragraph', 'listItem']);

/**
 * расширяем возможности элементов
 * с помощью посетителя, который
 * выводит информацию о классах в
 * формат HTML
 */
const toHtml = new HTMLVisitor();
doc.forEach((el) => el.accept(toHtml));
console.log(toHtml.print());

console.log('\n\n===============\n\n');

/**
 * расширяем возможности элементов
 * с помощью посетителя, который
 * выводит информацию о классах в
 * формат Markdown
 */
const toMarkdown = new MDVisitor();
doc.forEach((el) => el.accept(toMarkdown));
console.log(toMarkdown.print());
