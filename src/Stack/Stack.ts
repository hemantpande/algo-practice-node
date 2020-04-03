import { DataNode } from "../Linked_lists/Node";

export class Stack{
    first: DataNode;
    last: DataNode;
    length: number;

    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value: number) {
        
        let node = new DataNode(value);
        if(this.length === 0){
            this.first = node;
            this.last = node;
        }else{
            let currentFirst = this.first;
            this.first = node;    
            this.first.next = currentFirst;
        }
        
        this.length++;
        
        return this;
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