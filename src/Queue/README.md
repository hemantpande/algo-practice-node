# Queue
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
