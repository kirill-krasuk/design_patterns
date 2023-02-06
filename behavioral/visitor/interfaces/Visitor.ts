import { Paragraph } from '../classes/elements/Paragraph';
import { Text } from '../classes/elements/Text';
import { List } from '../classes/elements/List';
import { ListItem } from '../classes/elements/ListItem';

export interface Visitor {
	visitList(element: List): void;
	visitListItem(element: ListItem): void;
	visitText(element: Text): void;
	visitParagraph(element: Paragraph): void;
}
