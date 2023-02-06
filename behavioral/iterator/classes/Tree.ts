import { BFSIterator } from './iterators/BFSIterator';
import { DFSIterator } from './iterators/DFSIterator';
import { TreeNode } from './TreeNode';

export class Tree<T> {
	root: TreeNode<T>;

	constructor(value: T) {
		this.root = new TreeNode(value);
	}

	getRoot() {
		return this.root;
	}

	getBFSIterator() {
		return new BFSIterator(this.root);
	}

	getDFSIterator() {
		return new DFSIterator(this.root);
	}
}
