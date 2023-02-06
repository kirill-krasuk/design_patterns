import type { Visitor } from '../../interfaces/Visitor';

import { Text } from '../elements/Text';
import { Paragraph } from '../elements/Paragraph';
import { ListItem } from '../elements/ListItem';
import { List } from '../elements/List';

export class HTMLVisitor implements Visitor {
	private result = '';

	visitList(element: List): void {
		this.result += '<ul>\n';

		element.value.forEach((listValue) => {
			this.result += `\t<li>\n\t\t${listValue}\n\t</li>\n`;
		});

		this.result += '\n</ul>';
	}
	visitListItem(element: ListItem): void {
		this.result += `<li>\n\t${element.value}\n</li>\n`;
	}
	visitText(element: Text): void {
		this.result += `<span>\n\t${element.value}\n</span>\n`;
	}
	visitParagraph(element: Paragraph): void {
		this.result += `<p>\n\t${element.value}\n</p>\n`;
	}

	print() {
		return this.result;
	}
}
