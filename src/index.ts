import { frequencyCounterPattern } from "./Patterns/arrayMatcher";
import { multipleCounterPattern_pair_with_sum_zero } from "./Patterns/multiplePointers_PairWithSumZero";
import { multipleCounterPattern_unique_elements } from "./Patterns/multiplePointers_uniqueElements";
import { slidingWindowPattern } from "./Patterns/slidingWindow";
import { helperMethodRecursion } from "./Patterns/helperMethod_recursion";
import { SinglyLinkedList } from "./Linked_lists/SinglyLinkedList";
import { Stack } from "./Stack/Stack";
import { Queue } from "./Queue/Queue";
import { BinarySearchTree } from "./Trees/BinarySearchTree";
import { MaxBinaryHeap } from "./Heap/MaxBinaryHeap";
import { HashTable } from "./HashTable/HashTable";
import { Graph } from "./Graphs/Graphs";
import { stairs } from "./Dynamic_programming/Stairs";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const topic = `What are you looking for?
    1. Data Structures
    2. Leetcode problems
`;

rl.question(topic, (path) => {
    switch (path) {
        case '1':
            executeDataStructures();
            break;
        case '2':
            executeLeetCodeProblems();
        default:
            console.log('Invalid option');
    }
});

function executeLeetCodeProblems() {

}

function executeDataStructures() {
    const question = `Which program you want to run?
    1. Patterns
    2. Singly_Linked_List 
    3. Stack 
    4. Queue 
    5. Binary Search Trees and traversals
    6. Max Binary Heaps
    7. Hash tables
    8. Graphs
    9. Dynamic programming
    `;

    rl.question(question, (topic) => {
        console.log('Which operation?');
        switch (topic) {
            case '1':
                patterns();
                break;
            case '2':
                singlyLinkedList();
                break;
            case '3':
                stack();
                break;
            case '4':
                queue();
                break;
            case '5':
                binarySearchTree();
                break;
            case '6':
                maxBinaryHeap();
                break;
            case '7':
                hashTable();
                break;
            case '8':
                graph();
                break;
            case '9':
                dynamicProgramming();
                break;
            default:
                break;
        }
    });
}

function patterns() {
    const question = `
    Patterns
        1. Find if 1 array is square of the other
        2. Find the first pair whose sum is 0
        3. Find the number of unique elements in an array
        4. Find the maximum sum of N consecutive elements in an array
        5. Helper method recursion. Get odd numbers.
        `;

    rl.question(question, (answer) => {

        switch (answer) {
            case '1':
                frequencyCounterPattern([1, 2, 2, 3], [1, 9, 4, 4]);
                break;
            case '2':
                multipleCounterPattern_pair_with_sum_zero([-4, -3, -1, 0, 1, 2, 2, 3]);
                break;
            case '3':
                multipleCounterPattern_unique_elements([1, 1, 1, 3, 3, 4, 4, 4, 5, 6, 7, 11, 20, 20]);
                break;
            case '4':
                slidingWindowPattern([1, 2, 4, 4, 5, 6, 6, 3, 3, 3, 5, 6, 7, 8, 5, 9, 6, 7, 8, 8, 9, 7, 6, 9, 7], 3);
                break;
            case '5':
                helperMethodRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11]);
                break;
            default:
                console.log('Invalid selection')
                break;
        }

        rl.close();
    });
}

function singlyLinkedList() {
    const question = `
    Singly_Linked_List - 
        1.  Push value.
        2.  Pop value
        3.  Shift head and get it.
        4.  Un-Shift head.
        5. Get by index.
        6. Set by index.
        7. Insert at given index.
        8. Remove at given index.
        9. In-place reversal.
        `;

    rl.question(question, (answer) => {

        switch (answer) {
            case '1':
                let linkedList_push = new SinglyLinkedList();
                console.log(linkedList_push.push('Hello'));
                console.log(linkedList_push.push(1));
                console.log(linkedList_push.push(true));
                console.log('Linked list', linkedList_push.traverse());
                break;
            case '2':
                let linkedList_pop = new SinglyLinkedList();
                console.log(linkedList_pop.push('Hello'));
                console.log(linkedList_pop.push(1));
                console.log(linkedList_pop.push(true));
                console.log('Linked list', linkedList_pop.traverse());
                console.log('Popped element', linkedList_pop.pop());
                console.log('Popped element', linkedList_pop.pop());
                console.log('Linked list', linkedList_pop.traverse());
                console.log('Popped element', linkedList_pop.pop());
                console.log('Linked list', linkedList_pop.traverse());
                break;
            case '3':
                let linkedList_shift_head = new SinglyLinkedList();
                console.log(linkedList_shift_head.push('Hello'));
                console.log(linkedList_shift_head.push(1));
                console.log(linkedList_shift_head.push(true));
                console.log('Linked list', linkedList_shift_head.traverse());
                console.log('Old head', linkedList_shift_head.shiftHead());
                console.log('Linked list', linkedList_shift_head.traverse());
                break;
            case '4':
                let linkedList_unshift_head = new SinglyLinkedList();
                console.log(linkedList_unshift_head.push('Hello'));
                console.log(linkedList_unshift_head.push(1));
                console.log(linkedList_unshift_head.push(true));
                linkedList_unshift_head.unShiftHead('Goodbye');
                console.log('Linked list', linkedList_unshift_head.traverse());
                break;
            case '5':
                let linkedList_get = new SinglyLinkedList();
                console.log(linkedList_get.push('Hello'));
                console.log(linkedList_get.push(1));
                console.log(linkedList_get.push(true));
                console.log('Element at position 2', linkedList_get.getByIndex(2));
                console.log('Element at position 10', linkedList_get.getByIndex(10));
                break;
            case '6':
                let linkedList_set = new SinglyLinkedList();
                console.log(linkedList_set.push('Hello'));
                console.log(linkedList_set.push(1));
                console.log(linkedList_set.push(true));
                console.log('Linked list', linkedList_set.traverse());
                console.log('Setting element at position 2', linkedList_set.setByIndex(2, 'newValue'));
                console.log('Linked list', linkedList_set.traverse());
                break;
            case '7':
                let linkedList_insert = new SinglyLinkedList();
                console.log(linkedList_insert.push('Hello'));
                console.log(linkedList_insert.push(1));
                console.log(linkedList_insert.push(true));
                console.log('Linked list', linkedList_insert.traverse());
                console.log('Inserting element at position 2', linkedList_insert.insert(2, 'newValue'));
                console.log('Linked list', linkedList_insert.traverse());
                console.log('Inserting element at position 0', linkedList_insert.insert(0, 'newValue'));
                console.log('Linked list', linkedList_insert.traverse());
                console.log('Inserting element at position 5', linkedList_insert.insert(5, 'newValue'));
                console.log('Linked list', linkedList_insert.traverse());
                break;
            case '8':
                let linkedList_remove = new SinglyLinkedList();
                console.log(linkedList_remove.push('Hello'));
                console.log(linkedList_remove.push(1));
                console.log(linkedList_remove.push(true));
                console.log(linkedList_remove.push('newvalue4'));
                console.log(linkedList_remove.push('newvalue5'));
                console.log('Linked list', linkedList_remove.traverse());
                console.log('Removing element at position 2', linkedList_remove.remove(2));
                console.log('Linked list', linkedList_remove.traverse());
                console.log('Removing element at position 0', linkedList_remove.remove(0));
                console.log('Linked list', linkedList_remove.traverse());
                console.log('Removing last element', linkedList_remove.remove(linkedList_remove.length));
                console.log('Linked list', linkedList_remove.traverse());
                break;
            case '9':
                let linkedList_reverse = new SinglyLinkedList();
                console.log(linkedList_reverse.push('Hello'));
                console.log(linkedList_reverse.push(1));
                console.log(linkedList_reverse.push(true));
                console.log(linkedList_reverse.push('newvalue4'));
                console.log(linkedList_reverse.push('newvalue5'));
                console.log('Linked list', linkedList_reverse.traverse());
                linkedList_reverse.reverse();
                console.log('Linked list', linkedList_reverse.traverse());
                break;
            default:
                console.log('Invalid selection')
                break;
        }

        rl.close();
    });
}

function stack() {
    const question = `
    Stack - 
        1. Push
        2. Pop
    `;
    rl.question(question, (answer) => {

        switch (answer) {

            case '1':
                let stack_push = new Stack();
                stack_push.push(1);
                stack_push.push(2);
                stack_push.push(3);
                stack_push.push(4);
                console.log('Stack - ', stack_push.traverse());
                break;
            case '2':
                let stack_pop = new Stack();
                stack_pop.push(1);
                stack_pop.push(2);
                stack_pop.push(3);
                stack_pop.push(4);
                console.log('Stack - ', stack_pop.traverse());
                console.log('Popped element', stack_pop.pop());
                console.log('Popped element', stack_pop.pop());
                console.log('Stack - ', stack_pop.traverse());
                break;
            default:
                console.log('Invalid selection')
                break;
        }

        rl.close();
    });
}

function queue() {
    const question = `
    Queue - 
        1. Enqueue
        2. Dequeue
        `;
    rl.question(question, (answer) => {

        switch (answer) {
            case '1':
                let q_enqueue = new Queue();
                q_enqueue.enqueue(1);
                console.log('Queue - ', q_enqueue.traverse());
                q_enqueue.enqueue(2);
                console.log('Queue - ', q_enqueue.traverse());
                q_enqueue.enqueue(3);
                console.log('Queue - ', q_enqueue.traverse());
                q_enqueue.enqueue(4);
                console.log('Queue - ', q_enqueue.traverse());
                break;
            case '2':
                let q_dequeue = new Queue();
                q_dequeue.enqueue(1);
                q_dequeue.enqueue(2);
                q_dequeue.enqueue(3);
                q_dequeue.enqueue(4);
                console.log('Queue - ', q_dequeue.traverse());
                console.log('Dequeued element', q_dequeue.dequeue());
                console.log('Dequeued element', q_dequeue.dequeue());
                console.log('Queue - ', q_dequeue.traverse());
                break;
            default:
                console.log('Invalid selection')
                break;
        }

        rl.close();
    });
}

function binarySearchTree() {
    const question = `
    Binary Search Trees and tree traversals - 
        1. Insert a new node iteratively
        2. Insert a new node recursively
        3. Find iteratively
        4. Find recursively
        5. Breadth first search
        6. Depth first search - Pre-order
        7. Depth first search - Post-order
        8. Depth first search - In-order
        `;
    rl.question(question, (answer) => {

        switch (answer) {
            case '1':
                let bst_insert_iteratively = new BinarySearchTree();
                bst_insert_iteratively.insertIteratively(10);
                bst_insert_iteratively.insertIteratively(5);
                bst_insert_iteratively.insertIteratively(15);
                bst_insert_iteratively.insertIteratively(11);
                bst_insert_iteratively.insertIteratively(16);
                bst_insert_iteratively.insertIteratively(3);
                bst_insert_iteratively.insertIteratively(7);
                console.log('Tree structure', bst_insert_iteratively);
                break;
            case '2':
                let bst_insert_recursively = new BinarySearchTree();
                bst_insert_recursively.insertRecursively(10);
                bst_insert_recursively.insertRecursively(5);
                bst_insert_recursively.insertRecursively(15);
                bst_insert_recursively.insertRecursively(11);
                bst_insert_recursively.insertRecursively(16);
                bst_insert_recursively.insertRecursively(3);
                bst_insert_recursively.insertRecursively(7);
                console.log('Tree structure', bst_insert_recursively);
                break;
            case '3':
                let bst_find_iteratively = new BinarySearchTree();
                bst_find_iteratively.insertIteratively(10);
                bst_find_iteratively.insertIteratively(5);
                bst_find_iteratively.insertIteratively(15);
                bst_find_iteratively.insertIteratively(11);
                bst_find_iteratively.insertIteratively(16);
                bst_find_iteratively.insertIteratively(3);
                bst_find_iteratively.insertIteratively(7);
                console.log('Tree structure', bst_find_iteratively);
                console.log('Finding 16 iteratively...', bst_find_iteratively.findIteratively(16));
                break;
            case '4':
                let bst_find_recursively = new BinarySearchTree();
                bst_find_recursively.insertIteratively(10);
                bst_find_recursively.insertIteratively(5);
                bst_find_recursively.insertIteratively(15);
                bst_find_recursively.insertIteratively(11);
                bst_find_recursively.insertIteratively(16);
                bst_find_recursively.insertIteratively(3);
                bst_find_recursively.insertIteratively(7);
                console.log('Tree structure', bst_find_recursively);
                console.log('Finding 16 recursively...', bst_find_recursively.findRecursively(16));
                console.log('Finding 7 recursively...', bst_find_recursively.findRecursively(7));
                break;
            case '5':
                let breadth_first_search = new BinarySearchTree();
                breadth_first_search.insertIteratively(10);
                breadth_first_search.insertIteratively(6);
                breadth_first_search.insertIteratively(15);
                breadth_first_search.insertIteratively(3);
                breadth_first_search.insertIteratively(8);
                breadth_first_search.insertIteratively(20);
                console.log('Tree structure', breadth_first_search);
                console.log('Breadth first search - ', breadth_first_search.breadthFirstSearch());
                break;
            case '6':
                let depth_first_search_pre_order = new BinarySearchTree();
                depth_first_search_pre_order.insertIteratively(10);
                depth_first_search_pre_order.insertIteratively(6);
                depth_first_search_pre_order.insertIteratively(15);
                depth_first_search_pre_order.insertIteratively(3);
                depth_first_search_pre_order.insertIteratively(8);
                depth_first_search_pre_order.insertIteratively(20);
                console.log('Tree structure', depth_first_search_pre_order);
                console.log('Depth first search - Pre-order - ', depth_first_search_pre_order.depthFirstSearch_preOrder());
                break;
            case '7':
                let depth_first_search_post_order = new BinarySearchTree();
                depth_first_search_post_order.insertIteratively(10);
                depth_first_search_post_order.insertIteratively(6);
                depth_first_search_post_order.insertIteratively(15);
                depth_first_search_post_order.insertIteratively(3);
                depth_first_search_post_order.insertIteratively(8);
                depth_first_search_post_order.insertIteratively(20);
                console.log('Tree structure', depth_first_search_post_order);
                console.log('Depth first search - Post-order - ', depth_first_search_post_order.depthFirstSearch_postOrder());
                break;
            case '8':
                let depth_first_search_in_order = new BinarySearchTree();
                depth_first_search_in_order.insertIteratively(10);
                depth_first_search_in_order.insertIteratively(6);
                depth_first_search_in_order.insertIteratively(15);
                depth_first_search_in_order.insertIteratively(3);
                depth_first_search_in_order.insertIteratively(8);
                depth_first_search_in_order.insertIteratively(20);
                console.log('Tree structure', depth_first_search_in_order);
                console.log('Depth first search - In-order - ', depth_first_search_in_order.depthFirstSearch_inOrder());
                break;
            default:
                console.log('Invalid selection')
                break;
        }

        rl.close();
    });
}

function maxBinaryHeap() {
    const question = `
    Binary Heaps -
        1. Insert an element
        2. Remove an element 
        `;
    rl.question(question, (answer) => {

        switch (answer) {
            case '1':
                let binaryHeap_insert = new MaxBinaryHeap();
                binaryHeap_insert.insert(41);
                console.log('Heap structure', binaryHeap_insert.elements);
                binaryHeap_insert.insert(39);
                console.log('Heap structure', binaryHeap_insert.elements);
                binaryHeap_insert.insert(33);
                console.log('Heap structure', binaryHeap_insert.elements);
                binaryHeap_insert.insert(18);
                console.log('Heap structure', binaryHeap_insert.elements);
                binaryHeap_insert.insert(27);
                console.log('Heap structure', binaryHeap_insert.elements);
                binaryHeap_insert.insert(12);
                console.log('Heap structure', binaryHeap_insert.elements);
                binaryHeap_insert.insert(55);
                console.log('Heap structure', binaryHeap_insert.elements);
                binaryHeap_insert.insert(1);
                console.log('Heap structure', binaryHeap_insert.elements);
                binaryHeap_insert.insert(45);
                console.log('Heap structure', binaryHeap_insert.elements);
                break;
            case '2':
                let binaryHeap_remove = new MaxBinaryHeap();
                binaryHeap_remove.insert(41);
                console.log('Heap structure', binaryHeap_remove.elements);
                binaryHeap_remove.insert(39);
                console.log('Heap structure', binaryHeap_remove.elements);
                binaryHeap_remove.insert(33);
                console.log('Heap structure', binaryHeap_remove.elements);
                binaryHeap_remove.insert(18);
                console.log('Heap structure', binaryHeap_remove.elements);
                binaryHeap_remove.insert(27);
                console.log('Heap structure', binaryHeap_remove.elements);
                binaryHeap_remove.insert(12);
                console.log('Heap structure', binaryHeap_remove.elements);
                binaryHeap_remove.insert(55);
                console.log('Heap structure', binaryHeap_remove.elements);
                console.log('Max', binaryHeap_remove.extractMax());
                console.log('Heap structure', binaryHeap_remove.elements);
                console.log('Max', binaryHeap_remove.extractMax());
                console.log('Heap structure', binaryHeap_remove.elements);
                break;
            default:
                console.log('Invalid selection')
                break;
        }

        rl.close();
    });
}

function hashTable() {
    const question = `
    Hash tables - 
        1. Insert an element
        2. Set using Separate chaining
        3. Get using Separate chaining
        `;

    rl.question(question, (answer) => {

        switch (answer) {
            case '1':
                let hashTable = new HashTable();
                console.log(hashTable.trivialSet('orange', 15));
                console.log(hashTable.trivialSet('red', 15));
                console.log(hashTable.trivialSet('green', 15));
                break;
            case '2':
                let hashTable_set = new HashTable(4);
                hashTable_set.set("i love", "french fries");
                hashTable_set.set("hi", "goodbye");
                hashTable_set.set("magnificant", "taj mahal");
                hashTable_set.set("go corona", "go");
                hashTable_set.set("i have", "cats");
                console.log('hashTable.keyMap', hashTable_set.keyMap);
                break;
            case '3':
                let hashTable_get = new HashTable(4);
                hashTable_get.set("i love", "french fries");
                hashTable_get.set("hi", "goodbye");
                hashTable_get.set("magnificant", "taj mahal");
                hashTable_get.set("go corona", "go");
                hashTable_get.set("i have", "cats");
                console.log('hashTable.keyMap', hashTable_get.keyMap);
                console.log('get - i have', hashTable_get.get("i have"));
                break;
            default:
                console.log('Invalid selection')
                break;
        }

        rl.close();
    });
}

function graph() {
    const question = `
    Graphs -
        1. Add vertex
        2. Add edge
        3. Remove edge
        4. Remove vertex
        5. Depth first search - recursive
        6. Depth first search - iterative
    `;

    rl.question(question, (answer) => {

        switch (answer) {
            case '1':
                let graph_add_vertex = new Graph();
                console.log('Adjacency list', graph_add_vertex.addVertex('A'));
                console.log('Adjacency list', graph_add_vertex.addVertex('B'));
                break;
            case '2':
                let graph_add_edge = new Graph();
                console.log('Adjacency list', graph_add_edge.addVertex('Tokyo'));
                console.log('Adjacency list', graph_add_edge.addVertex('Dallas'));
                console.log('Adjacency list', graph_add_edge.addVertex('Aspen'));
                console.log('Adjacency list', graph_add_edge.addEdge('Tokyo', 'Dallas'));
                console.log('Adjacency list', graph_add_edge.addEdge('Dallas', 'Aspen'));
                break;
            case '3':
                let graph_remove_edge = new Graph();
                console.log('Adjacency list', graph_remove_edge.addVertex('Tokyo'));
                console.log('Adjacency list', graph_remove_edge.addVertex('Dallas'));
                console.log('Adjacency list', graph_remove_edge.addVertex('Aspen'));
                console.log('Adjacency list', graph_remove_edge.addEdge('Tokyo', 'Dallas'));
                console.log('Adjacency list', graph_remove_edge.addEdge('Dallas', 'Aspen'));
                console.log('Adjacency list', graph_remove_edge.removeEdge('Tokyo', 'Dallas'));
                break;
            case '4':
                let graph_remove_vertex = new Graph();
                console.log('Adjacency list', graph_remove_vertex.addVertex('Tokyo'));
                console.log('Adjacency list', graph_remove_vertex.addVertex('Dallas'));
                console.log('Adjacency list', graph_remove_vertex.addVertex('Aspen'));
                console.log('Adjacency list', graph_remove_vertex.addVertex('HongKong'));
                console.log('Adjacency list', graph_remove_vertex.addVertex('LosAngeles'));
                console.log('Adjacency list', graph_remove_vertex.addEdge('Tokyo', 'Dallas'));
                console.log('Adjacency list', graph_remove_vertex.addEdge('Tokyo', 'HongKong'));
                console.log('Adjacency list', graph_remove_vertex.addEdge('Dallas', 'Aspen'));
                console.log('Adjacency list', graph_remove_vertex.addEdge('Dallas', 'HongKong'));
                console.log('Adjacency list', graph_remove_vertex.addEdge('Dallas', 'LosAngeles'));
                console.log('Adjacency list', graph_remove_vertex.addEdge('LosAngeles', 'HongKong'));
                console.log('Adjacency list', graph_remove_vertex.removeVertex('HongKong'));
                break;
            case '5':
                let graph_dfs_recursive = new Graph();
                graph_dfs_recursive.addVertex('A');
                graph_dfs_recursive.addVertex('B');
                graph_dfs_recursive.addVertex('C');
                graph_dfs_recursive.addVertex('D');
                graph_dfs_recursive.addVertex('E');
                graph_dfs_recursive.addVertex('F');
                graph_dfs_recursive.addEdge('A', 'B');
                graph_dfs_recursive.addEdge('A', 'C');
                graph_dfs_recursive.addEdge('B', 'D');
                graph_dfs_recursive.addEdge('C', 'E');
                graph_dfs_recursive.addEdge('D', 'E');
                graph_dfs_recursive.addEdge('D', 'F');
                graph_dfs_recursive.addEdge('E', 'F');
                console.log('Adjacency list', graph_dfs_recursive.adjacencyList);
                console.log(graph_dfs_recursive.dfs_recursive('A'));
                break;
            case '6':
                let graph_dfs_iterative = new Graph();
                graph_dfs_iterative.addVertex('A');
                graph_dfs_iterative.addVertex('B');
                graph_dfs_iterative.addVertex('C');
                graph_dfs_iterative.addVertex('D');
                graph_dfs_iterative.addVertex('E');
                graph_dfs_iterative.addVertex('F');
                graph_dfs_iterative.addEdge('A', 'B');
                graph_dfs_iterative.addEdge('A', 'C');
                graph_dfs_iterative.addEdge('B', 'D');
                graph_dfs_iterative.addEdge('C', 'E');
                graph_dfs_iterative.addEdge('D', 'E');
                graph_dfs_iterative.addEdge('D', 'F');
                graph_dfs_iterative.addEdge('E', 'F');
                console.log('Adjacency list', graph_dfs_iterative.adjacencyList);
                console.log(graph_dfs_iterative.dfs_iterative('A'));
                break;
            default:
                console.log('Invalid selection')
                break;
        }

        rl.close();
    });
}

function dynamicProgramming(){
    const question = `
    Dynamic programming
        1. Imagine that a person is standing at the bottom of the stairs 
            and wants to reach the top and the person can climb 
            either 1 stair or 2 stairs at a time. 
            Your function should return the number of ways 
            the person can reach the top by only climbing 1 or 2 stairs at a time.
        2. Coin change
        `;

    rl.question(question, (answer) => {

        switch (answer) {
            case '1':
                console.log(stairs(5));
                break;
            default:
                console.log('Invalid selection')
                break;
        }

        rl.close();
    });
}

