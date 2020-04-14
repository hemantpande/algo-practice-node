# Priority Queue
Priority queues are commonly implemented using Binary Heaps (min or max, doesn't matter).

Basically the idea is that each element has a priority. Elements with higher priorities are served before elements with lower priorities. And the element with highest priority is always maintained at the Root. So when we want to serve (ExtractMax) we just do it using extractMax and re-balance the tree.

Naive approaches using linked list or array are O(n), however, using Binary heaps, it is always O(log(n)).

For implementing 'Priority queue' using Binary heap, we do operations on an object instead of number. The object has a Priority field, which is used in Insert() and extractMax() operations.
