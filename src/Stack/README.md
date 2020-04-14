# Stacks

A LIFO data structure! The last element added to the stack will be the first element removed from the stack, like a pile of books.

Stacks are use in - 
1. Managing function invocations
2. Undo / Redo
3. Routing in web frameworks. All visited addresses are maintained on stack. The return URL is the top item on stack.

**Trick** - Stack and queue can be simply implemented using built-in array data structure in JS. 
1. Push/pop - will give Stack
2. Unshift/shift - will give Queue

#### Operations

**Stack only has 2 operations - Push and Pop. Note that both these operations should be constant time.**

**Note** - We will be implementing Stack using Linked list. Push and Pop in linked list are not constant time. So we will use Shift and Unshift and maintain the list in reverse order.

```
First   D
        C
        B
Last    A

```

##### Push
1. The function should accept a value
2. Create a new node with that value
3. If there are no nodes in the stack, set the first and last property to be the newly created node 
4. If there is at least one node, create a variable that stores the current first property on the stack
5. Reset the first property to be the newly created node
6. Set the next property on the node to be the previously created variable
7. Increment the size of the stack by 1

##### Pop
1. If there are no nodes in the stack, return null
2. Create a temporary variable to store the first property on the stack
3. If there is only 1 node, set the first and last property to be null
4. If there is more than one node, set the first property to be the next property on the current first
5. Decrement the size by 1
6. Return the value of the node removed
