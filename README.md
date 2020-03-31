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

(Skipping for now, we'll come back to this)

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
