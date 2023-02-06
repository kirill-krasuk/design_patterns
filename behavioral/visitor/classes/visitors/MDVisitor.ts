import type { Visitor } from '../../interfaces/Visitor';

import { Text } from '../elements/Text';
import { Paragraph } from '../elements/Paragraph';
import { ListItem } from '../elements/ListItem';
import { List } from '../elements/List';

export class MDVisitor implements Visitor {
	private result = '';

	visitList(element: List): void {
		element.value.forEach((listValue) => {
			this.result += `*${listValue}\n`;
		});
	}
	visitListItem(element: ListItem): void {
		this.result += `*${element.value}\n`;
	}
	visitText(element: Text): void {
		this.result += `#${element.value}\n`;
	}
	visitParagraph(element: Paragraph): void {
		this.result += `\t#${element.value}\n`;
	}

	print() {
		return this.result;
	}
}
