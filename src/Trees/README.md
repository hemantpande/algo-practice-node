# Trees 

A data structure that consists of nodes in a parent / child relationshipIf we think. Linked list if the special type of tree.

Tree can also represented as a Graph, where there exists only one path to navigate between 2 nodes.

## Terminology
- **Root** - The top node in a tree.
- **Child** -A node directly connected to another node when moving away from the Root.
- **Parent** - The converse notion of a child.
- **Siblings** -A group of nodes with the same parent.
- **Leaf** - A node with no children.
- **Edge** - The connection between one node and another

## Uses
1. DOM is a tree.
2. Network Routing
3. Abstract syntax trees (Compiler) 
4. Directory structure.
5. Json

*Refer - [List of all data structures](https://en.wikipedia.org/wiki/List_of_data_structures)*

## Binary Search tree.

**Binary tree** - Tree in which each node has at most 2 children
**Binary search tree** - Refer rules below.
Rules - 

1. Every parent node has at most two children
2. Every node to the left of a parent node is always less than the parent
3. Every node to the right of a parent node is always greater than the parent

### Why use BST?
Binary search tree has Big O complexity of Log n, and is therefore preferable.

## Tree Operations:

### Insert a new node

1. Create a new node
2. Starting at the root
    - Check if there is a root, if not - the root now becomes that new node!
    - If there is a root, check if the value of the new node is greater than or less than the value of the root
    - If it is greater 
        - Check to see if there is a node to the right
            - If there is, move to that node and repeat these steps
            - If there is not, add that node as the right property
    - If it is less
        - Check to see if there is a node to the left
            - If there is, move to that node and repeat these steps
            - If there is not, add that node as the left property

### Finding a node

- Starting at the root
    - Check if there is a root, if not - we're done searching!
    - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
    - If not, check to see if the value is greater than or less than the value of the root
    - If it is greater 
        - Check to see if there is a node to the right
            - If there is, move to that node and repeat these steps
            - If there is not, we're done searching!
    - If it is less
        - Check to see if there is a node to the left
        - If there is, move to that node and repeat these steps
        - If there is not, we're done searching!

## Tree traversals
Visit each node. There are 2 ways to traverse a tree.

### Breadth first search
   
```
        ------> 10
------> 6       ------>15
--->3   --->8          --->20

```
Iterations - 

```
                    10
            6               15
        3       8               20

**Iteration 1**:

Start with root

To-Do Queue : [10]
Visited : []

**Iteration 2**:

Dequeue next item from the list and add the children of current item in to-do list in the queue, left and then right.

To-Do Queue : [6, 15]
Visited : [10]

**Iteration 3**:

Go on... repeat this process...

To-Do Queue : [15, 3, 8]
Visited : [10, 6]

**Iteration 4**:

Next...

To-Do Queue : [3, 8, 20]
Visited : [10, 6, 15]


**Iteration 5**:

Next... 3 doesn't have any children

To-Do Queue : [8, 20]
Visited : [10, 6, 15, 3]


**Iteration 6**:

Next...

To-Do Queue : [20]
Visited : [10, 6, 15, 3, 8]


**Iteration 7**:

Next...

To-Do Queue : []
Visited : [10, 6, 15, 3, 8, 20]

When to-do is empty, return the visited array.

```


### Algorithm
- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a left property on the node dequeued - add it to the queue
    - If there is a right property on the node dequeued - add it to the queue
- Return the variable that stores the values

## Depth first search

### Pre-order traversal:
![Pre order traversal](./resources/DFS_pre_order.png)

**Iteration 1**:
![Iteration 1](./resources/DFS_pre_order_iteration_1.png)

**Iteration 2**:
![Iteration 2](./resources/DFS_pre_order_iteration_2.png)

**Iteration 3**:
![Iteration 3](./resources/DFS_pre_order_iteration_3.png)

**Iteration 4**:
![Iteration 4](./resources/DFS_pre_order_iteration_4.png)

**Iteration 5**:
![Iteration 5](./resources/DFS_pre_order_iteration_5.png)

**Iteration 6**:
![Iteration 6](./resources/DFS_pre_order_iteration_6.png)


### Post-order traversal:
![Post order traversal](./resources/DFS_post_order.png)

**Iteration 1**:
![Iteration 1](./resources/DFS_post_order_iteration_1.png)

**Iteration 2**:
![Iteration 2](./resources/DFS_post_order_iteration_2.png)

**Iteration 3**:
![Iteration 3](./resources/DFS_post_order_iteration_3.png)

**Iteration 4**:
![Iteration 4](./resources/DFS_post_order_iteration_4.png)

**Iteration 5**:
![Iteration 5](./resources/DFS_post_order_iteration_5.png)

**Iteration 6**:
![Iteration 6](./resources/DFS_post_order_iteration_6.png)

**Side note** - We accidentally did this (due to an immature copy-paste) - 

``` 
recursive_postOrder(current: TreeNode, visited:any[]): any[] {
        
        if(current.left)
            this.recursive_preOrder(current.left, visited);
        
        if(current.right)
            this.recursive_preOrder(current.right, visited);
        
        visited.push(current.value);
        
        return visited;
    }

Note the recursive function called inside (it's pre-order).

The output was - [ 6, 3, 8, 15, 20, 10 ]

This is an interesting output. We have tuples here of (Parent, left, right), with Root at the end. 
```

### In-order traversal:

**Iteration 1**:
![Iteration 1](./resources/DFS_in_order_iteration_1.png)

**Iteration 2**:
![Iteration 2](./resources/DFS_in_order_iteration_2.png)

**Iteration 3**:
![Iteration 3](./resources/DFS_in_order_iteration_3.png)

**Iteration 4**:
![Iteration 4](./resources/DFS_in_order_iteration_4.png)

**Iteration 5**:
![Iteration 5](./resources/DFS_in_order_iteration_5.png)

## BFS vs DFS

1. Time complexity is same for both. 
2. If the tree is completely filled, and wide, and deep, then BFS will have more space complexity, since we maintain a queue. Ultimately, the queue will be 0, but it can hold lot of elements while running. 

## In-order vs Pre-order vs Post-order
1. If you want a sorted array then In-order is useful. 
