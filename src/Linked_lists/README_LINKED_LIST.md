# Linked lists

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
