import { NaivePriorityQueue } from "./Naive_priority_queue";

export class WeightedGraph {
    adjacencyList: {};

    constructor() {
        this.adjacencyList = {};
    }

    addNode(node) {
        if (!this.adjacencyList[node])
            this.adjacencyList[node] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight: weight })
    }

    dijkstra(start, end) {
        let nodes = new NaivePriorityQueue();
        let distances = {};
        let paths = {};

        // Initial setup
        for (const vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            paths[vertex] = null;
        }

        while(nodes.values.length){
            var smallest = nodes.dequeue().val;
            console.log('smallest', smallest);
            
            if(smallest === end){
                // We're done. return from here.
                console.log('distances', distances);
                console.log('paths', paths);
            }

            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    // find the next neighbor
                    var nextNode = this.adjacencyList[smallest][neighbor];
                    // calculate new distance
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        // we got a shorter path, lets update it
                        distances[nextNeighbor] = candidate;
                        // update how we reached here.
                        paths[nextNeighbor] = smallest;
                    }
                }
            }
        }
    }
}