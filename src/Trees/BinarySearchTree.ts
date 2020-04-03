import { TreeNode } from "./TreeNode";

export class BinarySearchTree {

    root: TreeNode;

    constructor() {
        this.root = null;
    }

    /*
                        10
                5               15
            3       7       11      16    
    */

    insertIteratively(value: number) {
        let newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value == current.value) return undefined;

            if (value < current.value) {
                if (current.left == null) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            }

            if (value > current.value) {
                if (current.right == null) {
                    current.right = newNode;
                    return this;
                }

                current = current.right;
            }
        }
    }

    insertRecursively(value: number) {
        let newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        this.recursive(this.root, newNode);
        return this;
    }

    recursive(root, newNode) {

        if (root == null) {
            root = newNode;
            return root;
        }

        if (root.value < newNode.value) {
            if (root.left == null) {
                root.left = newNode;
            } else {
                this.recursive(root.left, newNode);
            }
        }
        else if (root.value > newNode.value) {
            if (root.right == null) {
                root.right = newNode;
            } else {
                this.recursive(root.right, newNode);
            }
        } else {
            return root;
        }
    }
}