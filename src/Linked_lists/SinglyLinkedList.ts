import { DataNode } from "./Node";

export class SinglyLinkedList {

    head: DataNode;
    tail: DataNode;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse(): any[] {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }

        return values;
    }

    push(value: any) {
        let newNode = new DataNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(): DataNode {

        if (!this.head)
            return undefined;

        let currentHead = this.head;
        let previous = currentHead;
        while (currentHead.next) {
            previous = currentHead;
            currentHead = currentHead.next;
        }

        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return currentHead;
    }

    shiftHead(): DataNode {
        if (this.length === 0) return undefined;

        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return oldHead;
    }

    unShiftHead(value: string) {
        let newNode = new DataNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    getByIndex(index: number): any {
        if (index < 0 || index > this.length || !this.head)
            return undefined;

        let current = this.head;

        while (index > 0) {
            current = current.next;
            index--;
        }

        return current;
    }

    setByIndex(index: number, newValue: string): any {
        let found = this.getByIndex(index);
        if (found) {
            found.value = newValue;
            return true;
        }

        return false;
    }

    insert(index: number, value: string): any {

        if (index < 0 || index > this.length || !this.head)
            return false;

        if (index === 0) {
            this.unShiftHead(value);
            return true;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        let newNode = new DataNode(value);
        let nodeAtIndex = this.getByIndex(index);
        let nodeAtPreviousIndex = this.getByIndex(index - 1);

        nodeAtPreviousIndex.next = newNode;
        newNode.next = nodeAtIndex;

        this.length++;
        return true;
    }

    remove(index: number): any {

        if (index < 0 || index > this.length)
            return undefined;

        if (index === 0)
            return this.shiftHead();

        if (index === this.length)
            return this.pop();

        let previous = this.getByIndex(index - 1);
        let current = this.getByIndex(index);
        let next = this.getByIndex(index + 1);

        previous.next = next;
        this.length--;

        return current;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next, previous = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }

        return this;
    }
}