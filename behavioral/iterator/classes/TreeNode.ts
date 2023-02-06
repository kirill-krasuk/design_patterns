export class TreeNode<T> {
	value: T;
	children: TreeNode<T>[] = [];

	constructor(value: T) {
		this.value = value;
	}

	addChild(child: TreeNode<T>) {
		this.children.push(child);

		return this;
	}

	setValue(value: T) {
		this.value = value;
	}

	getValue() {
		return this.value;
	}

	isLeaf() {
		return this.children.length === 0;
	}
}
