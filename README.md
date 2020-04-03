# Algorithm notes:-

### How to run the solution?
`npm start` and select the program you want to run.

## Basics

### Frequency counter pattern
1. Two arrays [1,2,2,5] and [1,4,25,4] find if the second array is exact square of first.
2. Count the frequency of each element in both the arrays
3. Then match the frequency
4. Same is applicable to strings, find if 2 strings are same, 'querty' and 'uyterq'

### Multiple counter pattern
1. Given a sorted array [-3,-2,-1,0,2,4], find the first pair whose sum is 0.
2. Start 2 pointers, left and right, one at the beginning and one at the end.
3. If arr[left] + arr[right] < 0, increment left.
4. If arr[left] + arr[right] > 0, increment right.
5. The idea is simple, if the sum goes high on positive side, decrement right pointer, if sum goes on negative side, increment left counter, to sort of converge at the middle.

##### Another example,
1. Given an array [1,1,1,2,2,3,3,3,5,6,7,7,10], find the number of unique elements in it.
2. Start 2 pointers, root = array[0] and scout = array[1].
3. Add root to result as a first element.
4. Compare root and scout. If they are same increment scout.
5. If they are different, add root to result.
6. Do this till scout runs through entire array
Note- One variation, for above implementation space complexity is O(n). To avoid that, same array can be manipulated. In that case, the position of root after running the algorithm, will give the unique elements.

### Sliding window pattern
1. Given any array and a value N, we have to find the sub-array and the maximum sum of N consecutive elements in that array.
2. Brute force would be to loop through all the elements and find the sum of next N integers. But this is a problem if array is very large.
3. Better approach is, starting at 0 index, find the sum of N elements, and set a temporary max sum.
4. Next we run through the array again and keep subtracting an element and add the next element.
5. Effectively we are moving the window forward.
6 If we find a sum greater than temp max sum, we update it.

### Recursion
1. Has 2 elements :- A base case & a function that calls itself, with a reducing set of input to recursive call.
2. Helper method recursion is a pattern that is used when we want to collect the results in an collection.

## Search

### Linear search
1. Loop through all the elements, compare each element.

**(Skipping for now, we'll come back to this)**

### Linked lists

1. Linked lists are like stairs and Arrays are like a lift. In array(lift) you can say take me to 5th floor, and it will directly take you there, but in linked list, you have to traverse like a stair, first floor, then second, then third, fourth, then fifth.
2. There is no index. Linked lists is a bunch of nodes, holding each other.
3. Linked list have only 3 properties, head tail and length.
4. Difference between arrays and lists.
    #### Lists 

    a. Do not have indexes!
    b. Connected via nodes with a next pointer
    c. Random access is not allowed

    #### Arrays

    a. Indexed in order!
    b. Insertion and deletion can be expensive
    c. Can quickly be accessed at a specific index.
    
5. Operations:
    
    #### Push
    Add a new item in the end.
    1. This function should accept a value
    2. Create a new node using the value passed to the function
    3. If there is no head property on the list, set the head and tail to be the newly created node
    4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    5. Increment the length by one
    6. Return the linked list

    #### Pop
    Remove the last item.
    1. If there are no nodes in the list, return undefined
    2. Loop through the list until you reach the tail
    3. Set the next property of the 2nd to last node to be null
    4. Set the tail to be the 2nd to last node
    5. Decrement the length of the list by 1
    6. Return the value of the node removed

    #### Shift
    Removing a new node from the beginning of the Linked List
    1. If there are no nodes, return undefined
    2. Store the current head property in a variable
    3. Set the head property to be the current head's next property
    4. Decrement the length by 1
    5. Return the value of the node removed

    #### Unshift
    Add a new head
    1. This function should accept a value
    2. Create a new node using the value passed to the function
    3. If there is no head property on the list, set the head and tail to be the newly created node
    4. Otherwise set the newly created node's next property to be the current head property on the list
    5. Set the head property on the list to be that newly created node
    6. Increment the length of the list by 1
    7. Return the linked list

    #### Get an element
    Retrieving a node by it's position in the Linked List!
    1. This function should accept an index
    2. If the index is less than zero or greater than or equal to the length of the list, return null
    3. Loop through the list until you reach the index and return the node at that specific index

    #### Set an element at given index
    Changing the value of a node based on it's position in the Linked List
    1. This function should accept a value and an index
    2. Use your get function to find the specific node.
    3. If the node is not found, return false
    4. If the node is found, set the value of that node to be the value passed to the function and return true

    #### Insert 
    Adding a node to the Linked List at a specific position
    1. If the index is less than zero or greater than the length, return false
    2. If the index is the same as the length, push a new node to the end of the list
    3. If the index is 0, unshift a new node to the start of the list
    4. Otherwise, using the get method, access the node at the index - 1
    5. Set the next property on that node to be the new node
    6. Set the next property on the new node to be the previous next
    7. Increment the length
    8. Return true

    #### Remove
    1. If the index is less than zero or greater than the length, return undefined
    2. If the index is the same as the length-1, pop
    3. If the index is 0, shift
    4. Otherwise, using the get method, access the node at the index - 1
    5. Set the next property on that node to be the next of the next node
    6. Decrement the length
    7. Return the value of the node removed

    #### In-place Reverse
    ```
        node = this.head
        previous = null
        next = null

          100      101     102     103     104
    1.    node     next
    2.    prev     node    next
    3.             prev    node    next
    4.                     prev    node   next
    5.                             prev   node   next    
    
        loop{
            next = node.next
            node.next = prev
            node = next
            prev = node
        }
    ```

### Doubly linked list

**We'll come back to this section, skipping for now**

### Stacks

A LIFO data structure! The last element added to the stack will be the first element removed from the stack, like a pile of books.

Stacks are use in - 
1. Managing function invocations
2. Undo / Redo
3. Routing in web frameworks. All visited addresses are maintained on stack. The return URL is the top item on stack.

**Trick** - Stack and queue can be simply implemented using built-in array data structure in JS. 
1. Push/pop - will give Stack
2. Unshift/shift - will give Queue

#### Operations - 

**Stack only has 2 operations - Push and Pop. Note that both these operations should be constant time.**

**Note** - We will be implementing Stack using Linked list. Push and Pop in linked list are not constant time. So we will use Shift and Unshift and maintain the list in reverse order.

```
First   D
        C
        B
Last    A

```

#### Push
1. The function should accept a value
2. Create a new node with that value
3. If there are no nodes in the stack, set the first and last property to be the newly created node 
4. If there is at least one node, create a variable that stores the current first property on the stack
5. Reset the first property to be the newly created node
6. Set the next property on the node to be the previously created variable
7. Increment the size of the stack by 1

#### Pop
1. If there are no nodes in the stack, return null
2. Create a temporary variable to store the first property on the stack
3. If there is only 1 node, set the first and last property to be null
4. If there is more than one node, set the first property to be the next property on the current first
5. Decrement the size by 1
6. Return the value of the node removed

### Queue
First in - first out data structure. Like waiting in line.

Used in -
1. Background tasks
2. Uploading resources
3. Sending pages to a printer.

There are 2 ways to implement queues - 
1. Push and Shift
2. Unshift and pop.

Shift causes the entire array to re-index. However, pop simply pops the last element. So 2nd approach is constant time for pop operation, but again Unshift will cause the entire array to reindex, when we add an element in the beginning.

So a better approach, is to add at the end, and remove from the beginning, then this would be constant time for both operations.

```
1
1   2
1   2   3
1   2   3   4

And then simply pop from beginning.
```

### Operations

#### EnQueue
1. This function accepts some value
2. Create a new node using that value passed to the function
3. If there are no nodes in the queue, set this node to be the first and last property of the queue
4. Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
5. Increment the size of the queue by 1

#### Dequeue
1. If there is no first property, just return null
2. Store the first property in a variable
3. See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
4. If there is more than 1 node, set the first property to be the next property of first 
5. Decrement the size by 1
6. Return the value of the node dequeued

### Trees 

A data structure that consists of nodes in a parent / child relationshipIf we think. Linked list if the special type of tree.

#### Terminology - 
**Root** - The top node in a tree.
**Child** -A node directly connected to another node when moving away from the Root.
**Parent** - The converse notion of a child.
**Siblings** -A group of nodes with the same parent.
**Leaf** - A node with no children.
**Edge** - The connection between one node and another

#### Uses
1. DOM is a tree.
2. Network Routing
3. Abstract syntax trees (Compiler) 
4. Directory structure.
5. Json

*Refer - (List of all data structures)[https://en.wikipedia.org/wiki/List_of_data_structures]*

#### Binary Search tree.

Rules - 

1. Every parent node has at most two children
2. Every node to the left of a parent node is always less than the parent
3. Every node to the right of a parent node is always greater than the parent

#### Why use BST?
Binary search tree has Big O complexity of Log n, and is therefore preferable.

### Operations:

#### Insert a new node

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