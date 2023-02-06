import { TreeNode } from '../TreeNode';
import type { Iterable } from '../../interfaces/Iterable';

export class DFSIterator<T> implements Iterable<T> {
	private stack: TreeNode<T>[] = [];

	constructor(root: TreeNode<T>) {
		this.stack.push(root);
	}

	next(): IteratorResult<T> {
		if (this.stack.length === 0) {
			return { value: null, done: true };
		}

		const node = this.stack.pop();

		if (!node) {
			return { value: null, done: true };
		}

		const { children } = node;

		for (let i = children.length - 1; i >= 0; i--) {
			this.stack.push(children[i]);
		}

		return { value: node.getValue(), done: false };
	}

	[Symbol.iterator]() {
		return this;
	}
}
