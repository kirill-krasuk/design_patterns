import type { Command } from './Command';

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Memento {
	serialize(): string;
	deserialize(): Command;
}
