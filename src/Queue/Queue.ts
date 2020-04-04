import { DataNode } from "../Linked_lists/Node";

export class Queue {
    first: DataNode;
    last: DataNode;
    length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value: any) {
        let newNode = new DataNode(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
    }

    dequeue(): any {

        if (this.length === 0)
            return null;

        let currentFirst = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.length--;

        return currentFirst.value;
    }

    traverse(): any[] {
        let values = [];
        let current = this.first;
        while (current) {
            values.push(current.value);
            current = current.next;
        }

        return values;
    }

}