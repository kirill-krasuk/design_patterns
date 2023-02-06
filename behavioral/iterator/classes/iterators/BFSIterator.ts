import type { Iterable } from '../../interfaces/Iterable';
import { TreeNode } from '../TreeNode';

export class BFSIterator<T> implements Iterable<T> {
	private queue: TreeNode<T>[] = [];

	constructor(root: TreeNode<T>) {
		this.queue.push(root);
	}

	next(): IteratorResult<T> {
		if (this.queue.length === 0) {
			return { value: null, done: true };
		}

		const node = this.queue.shift();

		if (!node) {
			return { value: null, done: true };
		}

		const { children } = node;

		for (let i = 0; i < children.length; i++) {
			this.queue.push(children[i]);
		}

		return { value: node.getValue(), done: false };
	}

	[Symbol.iterator]() {
		return this;
	}
}
