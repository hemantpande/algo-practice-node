import { TreeNode } from "./TreeNode";
import { Queue } from "../Queue/Queue";

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

        this.recursiveInsert(this.root, newNode);
        return this;
    }

    recursiveInsert(root, newNode) {

        if (root == null) {
            root = newNode;
            return root;
        }

        if (root.value < newNode.value) {
            if (root.left == null) {
                root.left = newNode;
            } else {
                this.recursiveInsert(root.left, newNode);
            }
        }
        else if (root.value > newNode.value) {
            if (root.right == null) {
                root.right = newNode;
            } else {
                this.recursiveInsert(root.right, newNode);
            }
        } else {
            return root;
        }
    }

    /*
                        10
                5               15
            3       7       11      16    
    */

    findIteratively(value: number): any {

        let current = this.root;
        while (true) {
            if (current === null) {
                return undefined;
            }

            if (current.value === value) {
                return current;
            } else if (current.value < value) {
                current = current.right;
            } else if (current.value > value) {
                current = current.left;
            }
        }
    }

    findRecursively(value: number): TreeNode {
        let node = this.recursiveFind(value, this.root);
        console.log('node', node);
        return node;
    }

    recursiveFind(value: number, current: TreeNode): TreeNode {

        if (current === null) {
            return undefined;
        }

        if (current.value === value) {
            return current;
        }

        if (current.value < value) {
            return this.recursiveFind(value, current.right);
        }

        if (current.value > value) {
            return this.recursiveFind(value, current.left);
        }
    }

    breadthFirstSearch(): any {

        let to_do = new Queue();
        let visited = [];

        to_do.enqueue(this.root);

        while (to_do.length != 0) {
            let current = to_do.dequeue();
            visited.push(current.value);

            if (current.left)
                to_do.enqueue(current.left);

            if (current.right)
                to_do.enqueue(current.right);
        }

        return visited;
    }

    depthFirstSearch_preOrder(): any {
        let visited = [];
        visited = this.recursive_preOrder(this.root, visited);

        return visited;
    }

    recursive_preOrder(current: TreeNode, visited: any[]): any[] {

        visited.push(current.value);

        if (current.left)
            this.recursive_preOrder(current.left, visited);

        if (current.right)
            this.recursive_preOrder(current.right, visited);

        return visited;
    }

    depthFirstSearch_postOrder(): any {
        let visited = [];
        visited = this.recursive_postOrder(this.root, visited);

        return visited;
    }

    recursive_postOrder(current: TreeNode, visited: any[]): any[] {

        if (current.left)
            this.recursive_postOrder(current.left, visited);

        if (current.right)
            this.recursive_postOrder(current.right, visited);

        visited.push(current.value);

        return visited;
    }

    depthFirstSearch_inOrder(): any {
        let visited = [];
        visited = this.recursive_inOrder(this.root, visited);

        return visited;
    }

    recursive_inOrder(current: TreeNode, visited: any[]): any[] {

        if (current.left)
            this.recursive_inOrder(current.left, visited);

        visited.push(current.value);

        if (current.right)
            this.recursive_inOrder(current.right, visited);


        return visited;
    }
}