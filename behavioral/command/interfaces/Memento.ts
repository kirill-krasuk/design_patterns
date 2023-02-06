import type { Command } from './Command';

export interface Memento {
	serialize(): string;
	deserialize(): Command;
}
