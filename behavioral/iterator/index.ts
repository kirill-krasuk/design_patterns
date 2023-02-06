/* eslint-disable no-restricted-syntax */
import { Tree } from './classes/Tree';
import { TreeNode } from './classes/TreeNode';

const tree = new Tree(1);

tree.getRoot()
	.addChild(new TreeNode(2).addChild(new TreeNode(4).addChild(new TreeNode(5))))
	.addChild(new TreeNode(3).addChild(new TreeNode(6).addChild(new TreeNode(7))));

console.dir(tree, { depth: null });

console.log('BFS: \n');

/**
 * в этом случае мы захотели обойти дерево в ширину,
 * но не хотим знать как это реализовано внутри класса Tree.
 *
 * в другом случае дерево нам предоставляет итератор и для обхода
 * в глубину
 */
for (const value of tree.getBFSIterator()) {
	console.log(value);
}

console.log('DFS: \n');

for (const value of tree.getDFSIterator()) {
	console.log(value);
}
