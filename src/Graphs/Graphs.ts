import { HashTable } from "../HashTable/HashTable";

export class Graph{
    adjacencyList: any;

    constructor(){
        this.adjacencyList = new HashTable();
    }

    addVertex(value:any) {
        this.adjacencyList.set(value, []);
        return this.adjacencyList;
    }
}