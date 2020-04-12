import { HashTable } from "../HashTable/HashTable";

export class Graph {
    
    adjacencyList: {};

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(value: any): any {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = [];
        }

        return this.adjacencyList;
    }

    addEdge(vertex1: string, vertex2: string): any {

        if (this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push(vertex2);
        else
            return undefined;

        if (this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push(vertex1);
        else
            return undefined;

        return this.adjacencyList;
    }

    removeEdge(vertex1: string, vertex2: string): any {
        if (this.adjacencyList[vertex1])
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        else
            return undefined;

        if (this.adjacencyList[vertex2])
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        else
            return undefined;

        return this.adjacencyList;
    }

    removeVertex(vertex: string): any {
        let connectedNodes = this.adjacencyList[vertex];

        while(connectedNodes.length > 0) {
            let removedNode = connectedNodes.pop();
            this.removeEdge(vertex, removedNode);
        }
        delete this.adjacencyList[vertex];

        return this.adjacencyList;
    }

    dfs_recursive(startingNode: string): any {
        const result = [];
        const visited = [];
        const adjacencyList = this.adjacencyList; // Gotcha

        (function dfs(vertex: string) {
            if(!vertex)
                return null;
            
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor])
                    return dfs(neighbor);
            });

        })(startingNode);

        return result;
    }

    dfs_iterative(startingNode: string): any {
        const result = [];
        const visited = {};
        const stack = [startingNode];
        let currentNode;

        visited[startingNode] = true;
        while(stack.length > 0){
            
            currentNode = stack.pop();
            result.push(currentNode);

            this.adjacencyList[currentNode].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }
    
}